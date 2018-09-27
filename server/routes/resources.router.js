const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */

 // GET call for user's submitted resources
router.get('/userResources/:id', (req, res) => {
    console.log('/userResources GET route');
    let id = req.params.id
    const queryText = `SELECT resources.id, location_id, user_id, biz_name, biz_url, contact_name, contact_gender, contact_race, contact_langauges, biz_notes, resource_type, resource_type.type, FROM resources JOIN resource_type ON resources.resources_type=resources_type.id WHERE user-id = $1`;
    pool.query(queryText, [id]).
    then((result) => {
        console.log('back from db with resources', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log('error getting resources', error);
        res.sendStatus(500);
    })
});

// GET all resources
router.get('/', (req, res) => {
    let param = req.query.param;
    let value = req.query.value;
    if (param ==='type'){
        const queryText = `SELECT resources.*, locations.address, locations.lat, locations.lng, FROM resources JOIN locations ON locations.id = resources.location_id JOIN resources_type on resources.resources_type = resources_type.id = ${value} ORDER BY id;`;
        pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error getting resources: ', error);
            res.sendStatus(500);
        })
    }

    else {
        const queryText = `SELECT resources.*, locations.address, locations.lat, locations.lng FROM resources JOIN locations ON locations.id = resources.location_id ORDER BY id;`;
        pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error getting resources:', error);
            res.sendStatus(500);
        })    
    }
});

router.get('/type', (req, res) => {
    const queryText = `SELECT * FROM resources_type ORDER by id;`;
    pool.query(queryText)
    .then((result) => {
        console.log('returned from db with resource type', result.rows);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error getting resource phases', error);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    const address = req.body.address;
    const lat = req.body.lat;
    const lng = req.body.lng;
    const queryText = `INSERT INTO locations(address, lat, lng) VALUES ($1, $2, $3) RETURNING id;`
    pool.query(queryText, [address, lat, lng])
    .then((result) => {
        const location_id = result.rows[0].id;
        const user_id = req.body.user_id;
        const biz_name = req.body.biz_name;
        const biz_url = req.body.biz_url;
        const contact_name = req.body.contact_name;
        const contact_gender = req.body.contact_gender;
        const contact_race = req.body.contact_race;
        const contact_languages = req.body.contact_languages;
        const biz_notes = req.body.biz_notes;
        const resource_type = req.body.resource_type;
        const resourceQueryText = `INSERT INTO resources(location_id, user_id, biz_name, biz_url, contact_name, contact_gender, contact_race, contact_languages, biz_notes, resource_type) VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9, $10);`;
        pool.query(resourceQueryText, [location_id, user_id, biz_name, biz_url, contact_name, contact_gender, contact_race, contact_languages, biz_notes, resource_type])
        .then(() => {
            console.log('resource successfully created');
            res.sendStatus(201);            
        }).catch((error) => {
            console.log('error creating resource', error);
            res.sendStatus(500);
        })
    }).catch((error) => {
        console.log('error inserting location', error);
        res.sendStatus(500);
    })
});

router.put('/:id', (req, res) => {
    const id = req.params.id
    const resourceQueryText = `UPDATE resources SET biz_name = $1, biz_url = $2, contact_name = $3, contact_gender = $4, contact_race = $5, contact_languages = $6, biz_notes = $7, resource_type = $8, where id = $9;`;
    pool.query(resourceQueryText, [req.body.biz_name, req.body.biz_url, req.body.contact_name, req.body.contact_gender, req.body.contact_race, req.body.contact_languages, req.body.biz_notes, req.body.resource_type, id])
    .then(() => {
        console.log('resource successfully updated');
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error updating resource:', error);
        res.sendStatus(500);
    })
});

router.delete('/:id', (req, res) => {
    let queryText = 'DELETE FROM locations WHERE id = $1;';
    pool.query(queryText, [req.params.id])
    .then((res) => {
        console.log('successfully deleted resource');
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error deleting resource', error);
        res.sendStatus(500);
    })
});

module.exports = router;