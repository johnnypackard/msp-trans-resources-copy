const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('/businesses GET route');
    console.log('is authenticated?', req.isAuthenticated());
    console.log('user', req.user);
    
    if (req.isAuthenticated()) {
        const queryText = `SELECT id, biz_name, contact_name, address, gender, race, language, image_url, biz_notes FROM businesses WHERE id=$1`
        pool.query(queryText, [req.user.id]).then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    const businesses = req.body;
    if (req.isAuthenticated()) {
        console.log('businesses POST route');
        console.log(req.body);
        console.log('is authenticated?', req.isAuthenticated());
        console.log('user', req.user);
        const queryText = 'INSERT INTO businesses (biz_name, contact_name, address, gender, race, language, image_url, biz_notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'

        pool.query(queryText, [businesses.biz_name, businesses.contact_name, businesses.address, businesses.gender, businesses.race, businesses.language, businesses.image_url, businesses_biz_notes]).then((result) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});

router.delete('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('shelf Delete route');
        console.log('is authenticated?', req.isAuthenticated());
        console.log('user', req.user);
        const queryText = 'DELETE FROM businesses WHERE id=$1'
        const id = req.params.id;
        pool.query(queryText, [id]).then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});



module.exports = router;