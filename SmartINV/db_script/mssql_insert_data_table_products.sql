USE smartinvdb
GO

INSERT INTO products (
    CategoryID,
    ProductName,
    UnitPrice,
    ProductPicture,
    UnitInStock,
    CreatedDate,
    ModifiedDate
)
VALUES
(
    1,
    'iPhone 13 Pro Max',
    55000,
    'https://www.mxphone.com/wp-content/uploads/2021/04/41117-79579-210401-iPhone12ProMax-xl-1200x675.jpg',
    3,
    '2021-11-22T00:00:00',
    '2021-11-22T00:00:00'
),
(
    1,
    'iPad Pro 2021',
    18500,
    'https://cdn.siamphone.com/spec/apple/images/ipad_pro_12.9%E2%80%91inch/com_1.jpg',
    10,
    '2021-11-20T00:00:00',
    '2021-11-20T00:00:00'
),
(
    1,
    'Macbook Pro M1',
    45000,
    'https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/m/a/macbook_pro_13_silver_1.jpg',
    10,
    '2021-11-15T10:30:00',
    '2021-11-15T10:30:00'
),
(
    1,
    'Airpods Pro',
    12500,
    'https://www.avtechguide.com/wp-content/uploads/2020/11/leaked-apple-airpods-pro-generation2-info_01-800x445.jpg',
    5,
    '2021-11-10T10:30:00',
    '2021-11-12T10:30:00'
);