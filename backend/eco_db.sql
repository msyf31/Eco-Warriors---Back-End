CREATE TABLE users (
    id CHAR(36) PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    address TEXT,
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id CHAR(36) PRIMARY KEY,
    sku VARCHAR(100) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    size VARCHAR(50),
    weight DECIMAL(10, 2),
    stock INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE image_product (
    id CHAR(36) PRIMARY KEY,
    id_product CHAR(36),
    image TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_product) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE category_product (
    id CHAR(36) PRIMARY KEY,
    id_product CHAR(36),
    category VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_product) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE reviews (
    id CHAR(36) PRIMARY KEY,
    id_product CHAR(36),
    id_user CHAR(36),
    rate INT NOT NULL CHECK (rate IN (1, 2, 3, 4, 5)),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_product) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE cart (
    id CHAR(36) PRIMARY KEY,
    id_product CHAR(36),
    id_user CHAR(36),
    quantity INT DEFAULT 1 NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_product) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE checkout (
    id CHAR(36) PRIMARY KEY,
    id_user CHAR(36),
    payment_status ENUM('paid', 'unpaid') DEFAULT 'unpaid',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE checkout_cart (
    id CHAR(36) PRIMARY KEY,
    id_cart CHAR(36),
    id_checkout CHAR(36),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_cart) REFERENCES cart(id) ON DELETE CASCADE,
    FOREIGN KEY (id_checkout) REFERENCES checkout(id) ON DELETE CASCADE
);

CREATE TABLE blog (
    id CHAR(36) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    image TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE category_blog (
    id CHAR(36) PRIMARY KEY,
    id_blog CHAR(36),
    category VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_blog) REFERENCES blog(id) ON DELETE CASCADE
);

CREATE TABLE comment_blog (
    id CHAR(36) PRIMARY KEY,
    id_blog CHAR(36),
    id_user CHAR(36),
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_blog) REFERENCES blog(id) ON DELETE CASCADE,
    FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE
);

-- Dummy data
-- Insert dummy data for users
INSERT INTO users (id, email, password, name, address, phone, created_at, updated_at) VALUES
(UUID(), 'john.doe@example.com', 'password123', 'John Doe', '123 Main St', '555-1234', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), 'jane.smith@example.com', 'password123', 'Jane Smith', '456 Elm St', '555-5678', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), 'alice.jones@example.com', 'password123', 'Alice Jones', '789 Maple St', '555-8765', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), 'bob.brown@example.com', 'password123', 'Bob Brown', '101 Oak St', '555-4321', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), 'carol.white@example.com', 'password123', 'Carol White', '202 Pine St', '555-2468', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert dummy data for products
INSERT INTO products (id, sku, title, slug, description, price, size, weight, stock, created_at, updated_at) VALUES
(UUID(), 'SKU001', 'Product 1', 'product-1', 'Description for product 1', 10.00, 'M', 0.5, 100, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), 'SKU002', 'Product 2', 'product-2', 'Description for product 2', 20.00, 'L', 0.8, 200, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), 'SKU003', 'Product 3', 'product-3', 'Description for product 3', 30.00, 'S', 1.0, 150, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), 'SKU004', 'Product 4', 'product-4', 'Description for product 4', 40.00, 'XL', 1.2, 80, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), 'SKU005', 'Product 5', 'product-5', 'Description for product 5', 50.00, 'XXL', 1.5, 60, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert dummy data for image_product
INSERT INTO image_product (id, id_product, image, created_at, updated_at) VALUES
(UUID(), (SELECT id FROM products WHERE sku = 'SKU001'), 'image1.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM products WHERE sku = 'SKU002'), 'image2.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM products WHERE sku = 'SKU003'), 'image3.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM products WHERE sku = 'SKU004'), 'image4.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM products WHERE sku = 'SKU005'), 'image5.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert dummy data for category_product
INSERT INTO category_product (id, id_product, category, created_at, updated_at) VALUES
(UUID(), (SELECT id FROM products WHERE sku = 'SKU001'), 'Category 1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM products WHERE sku = 'SKU002'), 'Category 2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM products WHERE sku = 'SKU003'), 'Category 1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM products WHERE sku = 'SKU004'), 'Category 3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM products WHERE sku = 'SKU005'), 'Category 2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert dummy data for reviews
INSERT INTO reviews (id, id_product, id_user, rate, description, created_at, updated_at) VALUES
(UUID(), (SELECT id FROM products WHERE sku = 'SKU001'), (SELECT id FROM users WHERE email = 'john.doe@example.com'), 5, 'Excellent product!', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM products WHERE sku = 'SKU002'), (SELECT id FROM users WHERE email = 'jane.smith@example.com'), 4, 'Very good product.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM products WHERE sku = 'SKU003'), (SELECT id FROM users WHERE email = 'alice.jones@example.com'), 3, 'Average product.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM products WHERE sku = 'SKU004'), (SELECT id FROM users WHERE email = 'bob.brown@example.com'), 2, 'Not great.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM products WHERE sku = 'SKU005'), (SELECT id FROM users WHERE email = 'carol.white@example.com'), 1, 'Terrible product.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert dummy data for cart
INSERT INTO cart (id, id_product, id_user, quantity, created_at, updated_at) VALUES
(UUID(), (SELECT id FROM products WHERE sku = 'SKU001'), (SELECT id FROM users WHERE email = 'john.doe@example.com'), 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM products WHERE sku = 'SKU002'), (SELECT id FROM users WHERE email = 'jane.smith@example.com'), 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM products WHERE sku = 'SKU003'), (SELECT id FROM users WHERE email = 'alice.jones@example.com'), 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM products WHERE sku = 'SKU004'), (SELECT id FROM users WHERE email = 'bob.brown@example.com'), 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM products WHERE sku = 'SKU005'), (SELECT id FROM users WHERE email = 'carol.white@example.com'), 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert dummy data for checkout
INSERT INTO checkout (id, id_user, created_at, updated_at) VALUES
(UUID(), (SELECT id FROM users WHERE email = 'john.doe@example.com'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM users WHERE email = 'jane.smith@example.com'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM users WHERE email = 'alice.jones@example.com'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM users WHERE email = 'bob.brown@example.com'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM users WHERE email = 'carol.white@example.com'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert dummy data for checkout_cart
INSERT INTO checkout_cart (id, id_cart, id_checkout, created_at, updated_at) VALUES
(UUID(), (SELECT id FROM cart WHERE id_product = (SELECT id FROM products WHERE sku = 'SKU001') AND id_user = (SELECT id FROM users WHERE email = 'john.doe@example.com')), (SELECT id FROM checkout WHERE id_user = (SELECT id FROM users WHERE email = 'john.doe@example.com')), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM cart WHERE id_product = (SELECT id FROM products WHERE sku = 'SKU002') AND id_user = (SELECT id FROM users WHERE email = 'jane.smith@example.com')), (SELECT id FROM checkout WHERE id_user = (SELECT id FROM users WHERE email = 'jane.smith@example.com')), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM cart WHERE id_product = (SELECT id FROM products WHERE sku = 'SKU003') AND id_user = (SELECT id FROM users WHERE email = 'alice.jones@example.com')), (SELECT id FROM checkout WHERE id_user = (SELECT id FROM users WHERE email = 'alice.jones@example.com')), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM cart WHERE id_product = (SELECT id FROM products WHERE sku = 'SKU004') AND id_user = (SELECT id FROM users WHERE email = 'bob.brown@example.com')), (SELECT id FROM checkout WHERE id_user = (SELECT id FROM users WHERE email = 'bob.brown@example.com')), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM cart WHERE id_product = (SELECT id FROM products WHERE sku = 'SKU005') AND id_user = (SELECT id FROM users WHERE email = 'carol.white@example.com')), (SELECT id FROM checkout WHERE id_user = (SELECT id FROM users WHERE email = 'carol.white@example.com')), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert dummy data for blog
INSERT INTO blog (id, title, slug, description, image, created_at, updated_at) VALUES
(UUID(), 'Blog Post 1', 'blog-post-1', 'Description for blog post 1', 'blog1.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), 'Blog Post 2', 'blog-post-2', 'Description for blog post 2', 'blog2.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), 'Blog Post 3', 'blog-post-3', 'Description for blog post 3', 'blog3.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), 'Blog Post 4', 'blog-post-4', 'Description for blog post 4', 'blog4.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), 'Blog Post 5', 'blog-post-5', 'Description for blog post 5', 'blog5.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert dummy data for category_blog
INSERT INTO category_blog (id, id_blog, category, created_at, updated_at) VALUES
(UUID(), (SELECT id FROM blog WHERE slug = 'blog-post-1'), 'Category A', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM blog WHERE slug = 'blog-post-2'), 'Category B', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM blog WHERE slug = 'blog-post-3'), 'Category A', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM blog WHERE slug = 'blog-post-4'), 'Category C', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM blog WHERE slug = 'blog-post-5'), 'Category B', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert dummy data for comment_blog
INSERT INTO comment_blog (id, id_blog, id_user, description, created_at, updated_at) VALUES
(UUID(), (SELECT id FROM blog WHERE slug = 'blog-post-1'), (SELECT id FROM users WHERE email = 'john.doe@example.com'), 'Great post!', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM blog WHERE slug = 'blog-post-2'), (SELECT id FROM users WHERE email = 'jane.smith@example.com'), 'Very informative.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM blog WHERE slug = 'blog-post-3'), (SELECT id FROM users WHERE email = 'alice.jones@example.com'), 'Interesting read.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM blog WHERE slug = 'blog-post-4'), (SELECT id FROM users WHERE email = 'bob.brown@example.com'), 'Good article.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(UUID(), (SELECT id FROM blog WHERE slug = 'blog-post-5'), (SELECT id FROM users WHERE email = 'carol.white@example.com'), 'Nice write-up.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
