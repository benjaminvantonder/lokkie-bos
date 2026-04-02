/*
  # Create Products and Categories Tables for Lokkie-bos Art Store

  ## New Tables
  
  ### `categories`
  - `id` (uuid, primary key)
  - `name` (text) - Category name (e.g., "Watercolour", "Fineliner", "Watercolour & Fineliner")
  - `description` (text) - Category description
  - `created_at` (timestamptz)
  
  ### `products`
  - `id` (uuid, primary key)
  - `title` (text) - Product title
  - `description` (text) - Product description
  - `category_id` (uuid, foreign key to categories)
  - `size` (text) - Size designation (A3, A4, A5)
  - `price` (decimal) - Price in Rands
  - `image_url` (text) - URL to product image
  - `is_available` (boolean) - Whether product is available for purchase
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  
  ### `orders`
  - `id` (uuid, primary key)
  - `customer_name` (text)
  - `customer_email` (text)
  - `customer_phone` (text)
  - `notes` (text) - Custom artwork requests or notes
  - `status` (text) - Order status (pending, confirmed, completed)
  - `total_amount` (decimal)
  - `created_at` (timestamptz)
  
  ### `order_items`
  - `id` (uuid, primary key)
  - `order_id` (uuid, foreign key to orders)
  - `product_id` (uuid, foreign key to products)
  - `quantity` (integer)
  - `price` (decimal) - Price at time of purchase
  - `created_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Public read access for products and categories
  - Public can create orders (for customer purchases)
  - Authenticated access required for orders management
*/

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  size text NOT NULL,
  price decimal(10,2) NOT NULL,
  image_url text,
  is_available boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text,
  notes text,
  status text DEFAULT 'pending',
  total_amount decimal(10,2) NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
  product_id uuid REFERENCES products(id) ON DELETE SET NULL,
  quantity integer DEFAULT 1,
  price decimal(10,2) NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Categories policies
CREATE POLICY "Anyone can view categories"
  ON categories FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert categories"
  ON categories FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update categories"
  ON categories FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete categories"
  ON categories FOR DELETE
  TO authenticated
  USING (true);

-- Products policies
CREATE POLICY "Anyone can view available products"
  ON products FOR SELECT
  USING (is_available = true OR auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can insert products"
  ON products FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update products"
  ON products FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete products"
  ON products FOR DELETE
  TO authenticated
  USING (true);

-- Orders policies
CREATE POLICY "Anyone can create orders"
  ON orders FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all orders"
  ON orders FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update orders"
  ON orders FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete orders"
  ON orders FOR DELETE
  TO authenticated
  USING (true);

-- Order items policies
CREATE POLICY "Anyone can create order items"
  ON order_items FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view order items"
  ON order_items FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update order items"
  ON order_items FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete order items"
  ON order_items FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample categories
INSERT INTO categories (name, description) VALUES
  ('Watercolour', 'Beautiful watercolour artworks on premium paper'),
  ('Fineliner', 'Detailed fineliner illustrations with precision'),
  ('Watercolour & Fineliner', 'Combined technique pieces with both mediums')
ON CONFLICT DO NOTHING;

-- Insert sample products based on price list
INSERT INTO products (title, description, category_id, size, price, image_url, is_available) VALUES
  ('Watercolour Art - Small', 'Delicate watercolour piece on A5 paper', (SELECT id FROM categories WHERE name = 'Watercolour' LIMIT 1), 'A5', 280, 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800', true),
  ('Watercolour Art - Medium', 'Beautiful watercolour artwork on A4 paper', (SELECT id FROM categories WHERE name = 'Watercolour' LIMIT 1), 'A4', 380, 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800', true),
  ('Watercolour Art - Large', 'Stunning watercolour masterpiece on A3 paper', (SELECT id FROM categories WHERE name = 'Watercolour' LIMIT 1), 'A3', 480, 'https://images.pexels.com/photos/1988086/pexels-photo-1988086.jpeg?auto=compress&cs=tinysrgb&w=800', true),
  ('Fineliner Art - Small', 'Intricate fineliner drawing on A5 paper', (SELECT id FROM categories WHERE name = 'Fineliner' LIMIT 1), 'A5', 250, 'https://images.pexels.com/photos/1053924/pexels-photo-1053924.jpeg?auto=compress&cs=tinysrgb&w=800', true),
  ('Fineliner Art - Medium', 'Detailed fineliner artwork on A4 paper', (SELECT id FROM categories WHERE name = 'Fineliner' LIMIT 1), 'A4', 350, 'https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=800', true),
  ('Fineliner Art - Large', 'Complex fineliner piece on A3 paper', (SELECT id FROM categories WHERE name = 'Fineliner' LIMIT 1), 'A3', 450, 'https://images.pexels.com/photos/1988681/pexels-photo-1988681.jpeg?auto=compress&cs=tinysrgb&w=800', true),
  ('Combined Art - Small', 'Watercolour and fineliner on A5 paper', (SELECT id FROM categories WHERE name = 'Watercolour & Fineliner' LIMIT 1), 'A5', 300, 'https://images.pexels.com/photos/1143758/pexels-photo-1143758.jpeg?auto=compress&cs=tinysrgb&w=800', true),
  ('Combined Art - Medium', 'Watercolour and fineliner on A4 paper', (SELECT id FROM categories WHERE name = 'Watercolour & Fineliner' LIMIT 1), 'A4', 400, 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800', true),
  ('Combined Art - Large', 'Watercolour and fineliner on A3 paper', (SELECT id FROM categories WHERE name = 'Watercolour & Fineliner' LIMIT 1), 'A3', 500, 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800', true)
ON CONFLICT DO NOTHING;