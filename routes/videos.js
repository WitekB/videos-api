var express = require('express');
var router = express.Router();

router.route('/videos').get(function(req, res) {
    var response = {
            "totalRecords": 0,
            "videos": [
                {
                "id": 0,
                "user": "string",
                "title": "string",
                "description": "string"
                }
            ]
            };
    
    res.json(response);
});

module.exports = router;