{
    "name": "pos discount group",
    "summary": "",
    "version": "15.0.1.0.0",
    "category": "Product",
    "website": "",
    "author": "Muhammad Nasser",
    "license": "AGPL-3",
    "installable": True,
    "depends": [
        'pos_discount'
    ],
    "data": [
        "security/groups.xml",
    ],
    "assets":
        {
            "point_of_sale.assets": [
                "pos_discount_group/static/src/js/discount_access.js",
            ],
        }
}
