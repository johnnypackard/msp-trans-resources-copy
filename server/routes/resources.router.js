const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/community', (req, res) => {
    console.log('/resources GET route');
    const queryText = `SELECT biz_name, contact_name, address, gender, race, language, biz_notes FROM community`
    pool.query(queryText, [req.params.id]).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

router.get('/education', (req, res) => {
    console.log('/resources GET route');
    const queryText = `SELECT biz_name, contact_name, address, gender, race, language, biz_notes FROM education`
    pool.query(queryText, [req.params.id]).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

router.get('/financial', (req, res) => {
    console.log('/resources GET route');
    const queryText = `SELECT biz_name, contact_name, address, gender, race, language, biz_notes FROM financial`
    pool.query(queryText, [req.params.id]).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

router.get('/legal', (req, res) => {
    console.log('/resources GET route');
    const queryText = `SELECT biz_name, contact_name, address, gender, race, language, biz_notes FROM legal`
    pool.query(queryText, [req.params.id]).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

router.get('/healthcare', (req, res) => {
    console.log('/resources GET route');
    const queryText = `SELECT biz_name, contact_name, address, gender, race, language, biz_notes FROM healthcare`
    pool.query(queryText, [req.params.id]).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

router.get('/housing', (req, res) => {
    console.log('/resources GET route');
    const queryText = `SELECT biz_name, contact_name, address, gender, race, language, biz_notes FROM housing`
    pool.query(queryText, [req.params.id]).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;