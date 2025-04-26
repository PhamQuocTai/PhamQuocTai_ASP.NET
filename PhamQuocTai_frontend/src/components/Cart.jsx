import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, setCart } = useCart();

  const increaseQuantity = (id, size) => {
    const updatedCart = cart.map(item =>
      item.id === id && item.size === size
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    
    // Cập nhật lại giỏ hàng trong localStorage và context
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  };

  const decreaseQuantity = (id, size) => {
    const updatedCart = cart.map(item =>
      item.id === id && item.size === size && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    // Cập nhật lại giỏ hàng trong localStorage và context
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  };

  const removeItem = (id, size) => {
    const updatedCart = cart.filter(item => item.id !== id || item.size !== size);
    removeFromCart(id, size);  // Xóa sản phẩm khỏi Context
    setCart(updatedCart); // Cập nhật lại giỏ hàng trong context
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingFee = subtotal > 0 ? 20000 : 0;
  const total = subtotal + shippingFee;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Giỏ hàng</h2>

      {cart.length === 0 ? (
        <p className="text-white">Chưa có sản phẩm nào trong giỏ hàng.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-2">Sản phẩm</th>
                    <th className="py-2">Kích cỡ</th>
                    <th className="py-2">Giá</th>
                    <th className="py-2">Số lượng</th>
                    <th className="py-2">Tạm tính</th>
                    <th className="py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-3 flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <span>{item.name}</span>
                      </td>
                      <td className="py-3">{item.size}</td>
                      <td className="py-3 text-red-500 font-bold">
                        {item.price.toLocaleString("vi-VN")} đ
                      </td>
                      <td className="py-3">
                        <div className="flex items-center">
                          <button
                            onClick={() => decreaseQuantity(item.id, item.size)}
                            className="px-3 py-1 bg-gray-200 rounded"
                          >
                            -
                          </button>
                          <span className="px-4">{item.quantity}</span>
                          <button
                            onClick={() => increaseQuantity(item.id, item.size)}
                            className="px-3 py-1 bg-gray-200 rounded"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-3">
                        {(item.price * item.quantity).toLocaleString("vi-VN")} đ
                      </td>
                      <td className="py-3">
                        <button
                          onClick={() => removeItem(item.id, item.size)}
                          className="text-red-500"
                        >
                          ✖
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Cộng giỏ hàng</h2>
            <div className="flex justify-between py-2">
              <span>Tạm tính</span>
              <span>{subtotal.toLocaleString("vi-VN")} đ</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Giao hàng</span>
              <span className="font-bold">{shippingFee.toLocaleString("vi-VN")} đ</span>
            </div>
            <div className="flex justify-between py-2 font-bold text-lg">
              <span>Tổng</span>
              <span className="text-red-500">{total.toLocaleString("vi-VN")} đ</span>
            </div>
            <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
              Tiến hành thanh toán
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
