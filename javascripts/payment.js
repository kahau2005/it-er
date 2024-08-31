
const PaymentFrame = document.querySelector('.add-payment-container');
const courseInfoFrame = document.querySelector('.course-info-frame');
var momoView = `<div class="momo-container">
                    <span>Các ví momo đã liên kết với IT-ER</span>
                    <div class="all-momo">
                        <div class="payment-frame">
                            <input type="radio" name="payment-mm" id="momo" checked value="1">
                            <div class="payment-info">
                                <img src="../assets/icon/icon-momo.png" alt="momo">
                                <span>*****753</span>
                            </div>
                        </div>
                        <div class="payment-frame">
                            <input type="radio" name="payment-mm" id="momo" value="2">
                            <div class="payment-info">
                                <img src="../assets/icon/icon-momo.png" alt="momo">
                                <span>*****867</span>
                            </div>
                        </div>
                        <div class="payment-frame">
                            <input type="radio" name="payment-mm" id="momo" value="3">
                            <div class="payment-info">
                                <img src="../assets/icon/icon-momo.png" alt="momo">
                                <span>*****224</span>
                            </div>
                        </div>
                        <div style="cursor: pointer;" class="payment-frame">
                            <div class="payment-info">
                                <img style="filter: invert(1);" src="../assets/icon/icon-add.png" alt="momo">
                                <span>Thêm ví momo mới</span>
                            </div>
                        </div>
                        <div class="discount-frame">
                            <p>Nhập mã giảm giá (Tùy chọn)</p>
                            <div>
                                <input type="text">
                                <button>Xác nhận</button>
                            </div>
                        </div>
                        <div class="pay-now">
                            <button class="btn-pay-now">Thanh toán ngay</button>
                        </div>
                    </div>
                </div>`;
var qrCodeView = `<div class="qr-container">
                    <p class="qr-title">QR thanh toán</p>
                    <div class="qr-inf">
                        <img src="../assets/img/qr-code.svg" alt="qr">
                        <span class="timer">Đang chờ thanh toán</span>
                    </div>
                    <p class="qr-summary">Quý khách vui lòng quét mã QR để thanh toán nhanh chóng và an toàn cho khóa học trên website. Đảm bảo rằng ứng dụng thanh toán của bạn đã được cập nhật và đủ số dư để hoàn tất giao dịch.</p>
                </div>`;
var creditView = `<div class="credit-container">
                    <p>Thẻ ghi nợ / tín dụng</p>
                    <div class="credit-name">
                        <p>Họ tên ghi trên thẻ</p>
                        <input type="text">
                    </div>
                </div>
                <div class="credit-container">
                    <div class="credit-name">
                        <p>Số thẻ</p>
                        <div class="credit-number">
                            <img src="../assets/icon/icon-mastercard.png" alt="">
                            <input type="text">
                        </div>
                    </div>
                </div>
                <div class="credit-date">
                    <div class="credit-name date">
                        <p>Thời hạn</p>
                        <input type="month">
                    </div>
                    <div class="credit-name cvv">
                        <p>CVV</p>
                        <input type="text">
                    </div>
                </div>
                <div class="discount-frame">
                    <p>Nhập mã giảm giá (Tùy chọn)</p>
                    <div>
                        <input type="text">
                        <button>Xác nhận</button>
                    </div>
                </div>
                <div class="secure-tip">
                    <img src="../assets/icon/icon-secure.png" alt="ic-secure">
                    <p>Chúng tôi đảm bảo rằng mọi thông tin thẻ của quý khách sẽ được bảo vệ nghiêm ngặt trong quá trình thanh toán trực tuyến.</p>
                </div>
                <div class="pay-now">
                    <button class="btn-pay-now">Thanh toán ngay</button>
                </div>`;
PaymentFrame.innerHTML = momoView;
dataProcess();
function dataProcess(){
    var params = new URLSearchParams(window.location.search);
    var html = `<p>Số tiền cần thanh toán</p>
                    <p class="price">${params.get('price')} &#8363;</p>
                    <div class="course-info">
                        <img src="${params.get('banner')}" alt="ic-cpp">
                        <span>${params.get('couse_name')}</span>
                    </div>
                    <div class="secure">
                        <img src="../assets/icon/icon-check.png" alt="check">
                        <span>Thanh toán của bạn được bảo mật an toàn với công nghệ mã hóa tiên tiến.</span>
                    </div>`;
    courseInfoFrame.innerHTML = html;
}
function gotoHomePage(){
    window.location = "home.html"
}
function payClick(){
    var paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    switch (paymentMethod) {
        case "momo":
            PaymentFrame.innerHTML = momoView;
            break;
        case "qr":
            PaymentFrame.innerHTML = qrCodeView;
            break;
        case "credit":
            PaymentFrame.innerHTML = creditView;
            break;
        default:
            PaymentFrame.innerHTML = momoView;
            break;
}
}
