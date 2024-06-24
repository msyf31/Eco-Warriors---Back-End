import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import AddBlog from './components/blog/AddBlog';
import BlogList from './components/blog/BlogList';
import EditBlog from './components/blog/EditBlog';
import AddCart from './components/cart/AddCart';
import CartList from './components/cart/CartList';
import EditCart from './components/cart/EditCart';
import AddCategoryBlog from './components/categoryBlog/AddCategoryBlog';
import CategoryBlogList from './components/categoryBlog/CategoryBlogList';
import EditCategoryBlog from './components/categoryBlog/EditCategoryBlog';
import AddCategoryProduct from './components/categoryProduct/AddCategoryProduct';
import CategoryProductList from './components/categoryProduct/CategoryProductList';
import EditCategoryProduct from './components/categoryProduct/EditCategoryProduct';
import AddCheckout from './components/checkout/AddCheckout';
import CheckoutList from './components/checkout/CheckoutList';
import EditCheckout from './components/checkout/EditCheckout';
import AddCommentBlog from './components/commentBlog/AddCommentBlog';
import CommentBlogList from './components/commentBlog/CommentBlogList';
import EditCommentBlog from './components/commentBlog/EditCommentBlog';
import AddImageProduct from './components/imageProduct/AddImageProduct';
import EditImageProduct from './components/imageProduct/EditImageProduct';
import ImageProductList from './components/imageProduct/ImageProductList';
import AddProduct from './components/product/AddProduct';
import EditProduct from './components/product/EditProduct';
import ProductList from './components/product/ProductList';
import AddReview from './components/review/AddReview';
import EditReview from './components/review/EditReview';
import ReviewList from './components/review/ReviewList';
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';
import UserList from './components/user/UserList';
import AddCheckoutCart from './components/checkoutCart/AddCheckoutCart';
import CheckoutCartList from './components/checkoutCart/CheckoutCartList';
import EditCheckoutCart from './components/checkoutCart/EditCheckoutCart';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />

				{/* User routes */}
				<Route path="/user" element={<UserList />} />
				<Route path="/user/add" element={<AddUser />} />
				<Route path="/user/edit/:id" element={<EditUser />} />

				{/* Product routes */}
				<Route path="/product" element={<ProductList />} />
				<Route path="/product/add" element={<AddProduct />} />
				<Route path="/product/edit/:id" element={<EditProduct />} />

				{/* ImageProduct routes */}
				<Route path="/image-product" element={<ImageProductList />} />
				<Route path="/image-product/add" element={<AddImageProduct />} />
				<Route path="/image-product/edit/:id" element={<EditImageProduct />} />

				{/* CategoryProduct routes */}
				<Route path="/category-product" element={<CategoryProductList />} />
				<Route path="/category-product/add" element={<AddCategoryProduct />} />
				<Route
					path="/category-product/edit/:id"
					element={<EditCategoryProduct />}
				/>

				{/* Review routes */}
				<Route path="/review" element={<ReviewList />} />
				<Route path="/review/add" element={<AddReview />} />
				<Route path="/review/edit/:id" element={<EditReview />} />

				{/* Cart routes */}
				<Route path="/cart" element={<CartList />} />
				<Route path="/cart/add" element={<AddCart />} />
				<Route path="/cart/edit/:id" element={<EditCart />} />

				{/* Checkout routes */}
				<Route path="/checkout" element={<CheckoutList />} />
				<Route path="/checkout/add" element={<AddCheckout />} />
				<Route path="/checkout/edit/:id" element={<EditCheckout />} />

				{/* Blog routes */}
				<Route path="/blog" element={<BlogList />} />
				<Route path="/blog/add" element={<AddBlog />} />
				<Route path="/blog/edit/:id" element={<EditBlog />} />

				{/* CategoryBlog routes */}
				<Route path="/category-blog" element={<CategoryBlogList />} />
				<Route path="/category-blog/add" element={<AddCategoryBlog />} />
				<Route path="/category-blog/edit/:id" element={<EditCategoryBlog />} />

				{/* CommentBlog routes */}
				<Route path="/comment-blog" element={<CommentBlogList />} />
				<Route path="/comment-blog/add" element={<AddCommentBlog />} />
				<Route path="/comment-blog/edit/:id" element={<EditCommentBlog />} />

				{/* CheckoutCart routes */}
				<Route path="/checkout-cart" element={<CheckoutCartList />} />
				<Route path="/checkout-cart/add" element={<AddCheckoutCart />} />
				<Route path="/checkout-cart/edit/:id" element={<EditCheckoutCart />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
