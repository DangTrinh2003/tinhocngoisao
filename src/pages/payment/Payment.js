import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Payment = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Cổng thanh toán" />
      <div className="pb-10">
        <p>Đơn hàng đã được thanh toán thành công.</p>
        <Link to="/">
          <button className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            Tiếp tục mua hàng
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
