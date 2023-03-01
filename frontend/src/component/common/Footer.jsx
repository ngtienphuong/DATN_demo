import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer className="text-center bg-white text-muted mt-3">
                <section className="">
                    <div className="container text-md-start">
                        <div className="row">
                            <div className="col-md-3 col-lg-4 col-xl-2 mb-1">
                                <h6 className="text-uppercase fw-bold mb-4 mt-1">
                                    <i className="fas fa-gem me-3"></i>Siêu thị
                                </h6>
                                <p>
                                    Bán hàng tiêu dùng.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-1">
                                <h6 className="text-uppercase fw-bold mb-4 mt-1">
                                    Sản phẩm
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Đồ uống giải khát</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Đồ ăn nhanh</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Thực phẩm khô</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Gia vị</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Khăn giấy, tã bỉm</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Sữa chua</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-1">
                                <h6 className="text-uppercase fw-bold mb-4 mt-1">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-4 mx-auto mb-md-0 mb-1">
                                <h6 className="text-uppercase fw-bold mb-4 mt-1">Liên hệ</h6>
                                <p><i className="fas fa-home me-3"></i> Thành phố Hồ Chí Minh</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>ng.tienphuong2480@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 84 366017402</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-3 bg-light text-black">
                    Copyright © 2022
                    Nguyễn Tiến Phương
                </div>
            </footer>
        )
    }
}

export default Footer