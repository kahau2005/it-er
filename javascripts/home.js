const popularCoursesParent = document.querySelector('.content-area .content .course-container .courses-show');
const allPageElements = document.querySelector('#all .content');
const mainContainer = document.querySelector('main');
const courseDetailParent = document.getElementById('course-details');
const navCourseContainer = document.querySelector('#home .nav');
var allCoursesData = [
    {
        course_name: 'Lập trình C# .Net',
        icon: '../assets/icon/icon-dot-net.png',
        banner: '../assets/img/dot-net-course.png',
        price: '250.000',
        originPrice: '300.000',
        viewer: 5654,
        hours: 140,
        courses: [
            {
                name: 'Lập trình phần mềm Quản lý quán cafe với C# Winform',
                banner: '../assets/img/QuanLyQuanCaFe.jpg',
                introduction: 'Bạn đã học qua LẬP TRÌNH C# CƠ BẢN? Xong nốt cả LẬP TRÌNH WINFORM lẫn SQL? Bạn đã chán các bài tập căn bản, muốn thực hành các kiến thức đã học vào một dự án thực tế? Hay đơn giản bạn là chủ quán café, mong muốn tự tạo nên phần mềm dành cho chính mình sử dụng? Vậy còn chần chừ gì không tham gia ngay khóa học LẬP TRÌNH PHẦN MỀM QUÁN CAFÉ VỚI C# WINFORM?',
                content: 'Trong khóa học này, bạn sẽ được học cách để tạo một Phần mềm quản lý quán café ở mức cơ bản. Tuy nhiên, cũng không ít kỹ thuật thú vị như:Kỹ thuật sử dụng Combobox, NumericUpdown, DataGrid View, DataSet, DataTable, DataRow DataBiding cơ bản & Nâng cao. Sử dụng các control cơ bản và nâng cao trong Winform. Phân tích thiết kế cơ sở dữ liệu,  phân tích thiết kế màn hình. Ở SQL bạn sẽ được tiếp cận những thứ rất thực tế như trigger, procedure, function, T-SQL, tìm kiếm gần đúng, kết nối SQL với ứng dụng Winform dùng ADO.net .Ngoài ra bạn còn được tìm hiểu về event và event nâng cao, Chuyển data giữa các form, Ngăn việc đóng chương trình, thủ thuật giấu controlTạo form đăng nhập và phân quyền người dùng trên ứng dụng, thêm xúa sửa dữ liệu từ trang quản trị. Và rất nhiều thủ thuật cá nhân cùng kinh nghiệm thực tế trong quá trình làm dự án của Kteam',
                course_requirement: 'Serial dành cho những bạn muốn tìm hiểu và tự tay xây dựng một phần mềm quản lý bằng Winform, cũng như trau dồi và thực hành thêm các kinh nghiệm sử dụng các kỹ thuật khó trong lập trình C#. Sẽ rất ưu thế nếu bạn đã nắm vững qua các kiến thức đề cập ở phần giới thiệu, tuy nhiên nếu chưa có kinh nghiệm trong các phần đó, thì hãy đảm bảo bạn có đủ các kiến thức nền tảng về C# & SQL. Là một trong những khóa hướng dẫn về dự án thực tế có tính áp dụng cao, đòi hỏi nắm chắc kiến thức cơ bản cũng như truyền tải khá nhiều kinh nghiệm, kỹ năng khó. Vì vậy, hãy đảm bảo bạn không là newbie “lạc trôi” vào chốn này nhé! ',
                lessons: [
                    {
                        name: 'Thiết kế cơ sở dữ liệu cho phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/R8HRA72Orkk?si=1nZAURdBNw8ZqBgw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Thiết kế giao diện cho phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/h7OYMHCa2WE?si=9r3m0cRiuxQcM8qk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Giới thiệu mô hình 3 lớp (3 Layers)',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zeyIss4SPMI?si=IvFZdSOdEB4oQSBJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Tạo lớp DataProvider cho phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/buwTuw8ByP4?si=fa-FswPQWQAYE5n2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Giới thiệu design patern Singleton phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DzzbIgcZmmQ?si=VxJR56idyi_U_0Q3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Tạo chức năng đăng nhập cho phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/tUYpV_jj3Jw?si=56YbT22nmSvf4-vm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Hạn chế lỗi SQL Injection cho phần mềm Quản lý quán cafe với C# Winform', 
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/HE1Me9y9AKc?si=c-OcBpkgA6PzlxVL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Hiển thị số bàn theo CSDL cho phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ssO-LRIrMMo?si=ZjliOivbQ5wxQ_iZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Hiển thị hóa đơn theo bàn cho phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/x0c74PJiMWs?si=R_fiNpkzvP2w_O4G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Hiển thị tổng tiền cho phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/E_cSsADKeg8?si=hIuAzQEEuLT7fLPC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Thêm bớt món hóa đơn trong phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/rfKh_TaySD8?si=1HrkU6zdnm22CLD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Thanh toán hóa đơn trong phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_csuXCrMIro?si=dPBtIIBf1ks9uQ_d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Chuyển bàn trong phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/m_pM84DptSo?si=oFxo4psqJIL51WHr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Hiển thị sanh sách hóa đơn trong phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/sIezOAPobr4?si=CyD6Mb13H4MCDJ9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Thay đổi thông tin cá nhân trong phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qgXHfXGTXhI?si=zcAzBecOqjFW5Hxx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Hiển thị danh sách thức ăn trong phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/g1_usy0JxKs?si=LUbTqCXaSwumy1W6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Binding thông tin thức ăn trong phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/AvE9Bdz7lsQ?si=MZwt-VWbjhaELryr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Thêm, xóa, sửa thức ăn trong phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/P5eMWJfU6rA?si=bTKgGLjuRvbeI_Cl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Tìm kiếm gần đúng thức ăn trong phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GIsfvtJw5FA?si=tlGlYqlodQGRFi_2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Hiển thị danh sách tài khoản trong phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/SZioIwuBdk4?si=0eNuHwUOBoAK6OtH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Thêm, xóa, sửa tài khoản trong phần mềm Quản lý quán cafe với C# Winform', 
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/A65T_tllxh4?si=NhwTRU6BD29Mka0i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Mã hóa mật khẩu trong phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/bQjEMd9h0es?si=x3fOGyNApamEIc1y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Tạo phím tắt cho phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/O4jRluGdr20?si=3Z9DFEdHOBgIKrCr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Phân trang cho hóa đơn trong phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/OjaLcGxhcaU?si=GXpCx-qb8y0hn_8s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Tạo report trong phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/i6eg5fval_A?si=3oN_ztB9rqjk2fqG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Đóng gói phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/W9jvrB5d-pc?si=OJmUfUV0eUdcsIK3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    }
                ]
            },
            {
                name: 'Megaman X4 Cheat với cheat engine',
                banner: '../assets/img/Megaman-Cheat-Engine_Howkteam.png',
                introduction: 'Megaman X4 là một tựa game rất thú vị gắn bó với mình một thời gian dài qua điện tử bấm, khi mà máy tính hay lập trình còn là gì đó vô cùng xa vời. Mình còn nhớ nguyên mấy tháng mùa hè dí đầu dí cổ vào game để luyện tay qua màn, mãi mà không phá đảo được. Giờ vẫn còn cay! Vậy nên để thử thách bản thân, mình đã tạo ra một giải pháp giúp mình chinh phục "giấc mơ tuổi thơ này". Đó chính là TOOL CHEAT GAME MEGAMAN X4. Ở khóa học LẬP TRÌNH GIAO DIỆN MEGAMAN TOOL VỚI WPF chúng ta đã cùng nhau tạo ra giao diện khá ngầu. Tiếp theo trong khóa này, Kteam sẽ hướng dẫn bạn sử dụng Cheat Engine để tạo ra Tool Megaman. Nào! Chúng ta cùng bắt đầu với khóa Megaman X4 Cheat với cheat engine',
                content: 'Khóa học này sẽ giúp cho các bạn củng cố kiến thức về: Biết đọc ghi memory của máy tính. Có thể làm một tool auto game cơ bản của riêng mình với WPF C#',
                course_requirement: 'Serial này chắc chắn dành cho các bạn muốn phá đảo game Megaman x4 rồi. Tuy nhiên, để có thể theo dõi khóa học này một cách tốt nhất bạn nên có kiến thức về LẬP TRÌNH WPF. Có từng chơi qua game Megaman x4 để hiểu các thuật ngữ "chuyên game" của mình như One hit Creep, One Hit Boss, Full Life,....tránh gây bỡ ngỡ với nội dung hướng dẫn của bài học.',
                lessons: [
                    {
                        name: 'Giới thiệu cheat engine và chơi thử game MegamanX4',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Jv7yiUG6Dt0?si=DswGIKp0oJxvvX2i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Scan HP nhân vật và freeze máu',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/49CiTtPkPiI?si=noWJMHnz45AOL0iT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Scan HP Boss và chỉnh 1 máu',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ATBHou1iRHA?si=-j_z0n8GnmngQH9m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Scan mạng và chỉnh max mạng',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/h5kDX0bz5hc?si=8PT3fbzjmERwzPe8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Scan dame lên quái và chỉnh OneHit',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/p3UNV-7j64c?si=WnAwPVbiepTQgTYH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Dùng C# chỉnh bất tử máu',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/p5f0QBLWTUQ?si=32ZGqzwpy0EufUlG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Dùng C# chỉnh bất tử mạng',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zCVLCXMkCh0?si=7xJnB9CRFcK7WKlr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Dùng C# chỉnh one hit boss',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/tkvu19HY-sA?si=-cosW2A9jFRvSlHU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Dùng C# chỉnh one hit quái',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/L1tY-ZqqhoE?si=LeDfvJ9y0haYLsc3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    }
                ]
            },
            {
                name: 'Lập trình giao diện Megaman tool với WPF',
                banner: '../assets/img/UI-Megaman-howkteam.png',
                introduction: 'Megaman X4 là một tựa game rất thú vị gắn bó với mình một thời gian dài qua điện tử bấm, khi mà máy tính hay lập trình còn là gì đó vô cùng xa vời. Mình còn nhớ nguyên mấy tháng mùa hè dí đầu dí cổ vào game để luyện tay qua màn, mãi mà không phá đảo được. Giờ vẫn còn cay! Vậy nên để thử thách bản thân, mình đã tạo ra một giải pháp giúp mình chinh phục "giấc mơ tuổi thơ này". Đó chính là TOOL CHEAT GAME MEGAMAN X4. Tuy nhiên, trước khi làm tool bạn cần có một giao diện đẹp "kinh khủng khiếp" để có thể xịn xò ngang với game. Chính vì vậy, để bổ trợ cho khóa học CHEAT GAME MEGAMAN X4, đồng thời củng cố khả năng lập trình giao diện với WPF. Kteam sẽ cùng bạn bắt đầu Lập trình giao diện Megaman tool với WPF.',
                content: 'Khóa học này sẽ giúp cho các bạn củng cố kiến thức về: Chia khung cho giao diện. Trigger. Sử dụng Resource. Quản lý resources. DragMove custorm controlbar. Play sound',
                course_requirement: 'Serial này chắc chắn dành cho các bạn muốn phá đảo game Megaman x4 rồi. Tuy nhiên, để có thể theo dõi khóa học này một cách tốt nhất bạn nên có kiến thức về LẬP TRÌNH WPF. Có từng chơi qua game Megaman x4 để hiểu các thuật ngữ "chuyên game" của mình như One hit Creep, One Hit Boss, Full Life,....tránh gây bỡ ngỡ với nội dung hướng dẫn của bài học',
                lessons: [
                    {
                        name: 'Import assest từ design',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/fgWgha8dlxE?si=vHdWOjTtTt1JEcHv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Tạo thanh controlbar và hình logo',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/5DanP5UX9Oo?si=BrT2usKIeqvlpSQW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Đổi trạng thái inject',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cFahQei7Qjo?si=C_5OjQFjf4XwG_Bw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Animation created by',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qX1nRgw8fz8?si=g0WoqC2oPXMt-Kew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Animation One Hit Creep button',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-ikf0II2AxY?si=CVggDHspWYttEL_l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Animation Full Life button',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VnfkxyXPNyw?si=R6MKakk6TqB-1cwA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Animation One Hit Boss Button',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qfXh72Y6LC0?si=GCknBrXF9HEgDO2Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Animation Imortal Button',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/5vGs0qTiSEg?si=4Phy0Cj_V66G1a0T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    }
                ]
                
            },
            {
                name: 'Lập trình Tool Auto Android với ADB',
                banner: '../assets/img/Intro_ADB-Capture_Howkteam_com.png',
                introduction: 'Trong các serial trước, Kteam đã hướng dẫn bạn làm quen với thư viên KAutoHelper qua TOOL AUTO TĂNG VIEW WEBSITE, ĐIỀU KHIỂN ỨNG DỤNG PC,... Tuy nhiên, vẫn còn kha khá thứ chưa vừa ý. Vì vậy, trong khóa học này, chúng ta sẽ cùng tìm hiểu thư viện KAutoHelper version2 với nhiều chức năng linh hoạt hơn.',
                content: 'Trong khoá học này các bạn sẽ được hướng dẫn về: Sử dụng capture, thư viện Kautohelper version 2, Image search. Click vào vị trí của hình xuất hiện. Auto trên nhiều thiết bị',
                course_requirement: 'Để có đủ khả năng học hiểu các nội dung được đề cập đến trong khóa học. Bạn nên có tối thiểu kiến thức về các phần: LẬP TRÌNH C# CƠ BẢN. LẬP TRÌNH KEYLOGGER VỚI C#. LẬP TRÌNH WINFORM CƠ BẢN',
                lessons: [
                    {
                        name: 'Giới thiệu ADB Shell trong Lập trình tool Auto Android',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/yH_BdpZHFco?si=rNUF6eWyETN_FMlN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Tìm hiểu ADB capture với thư viện KAutoHelper Ver2',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/IE76mf0I4HU?si=2gsW2ZzizBpulTP5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Lập trình Tool Auto Android với ADB sử dụng Kautohelper ver2',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/oMYOVM3q6m4?si=e-wEAGVZuM2GwmnR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Phiên bản ADB Capture Ver2',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mVXhNvMHKug?si=CxFhCkhF7BKw_jNz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    }
                ]
            },
            {
                name: 'Tool cày view Website HowKteam.com',
                banner: '../assets/img/tool-cay-view.png',
                introduction: 'Nếu bạn là tín đồ C#, lại đang tu luyện combo Auto C# của Kteam. Thì hẳn đây sẽ là một khóa học giúp bạn tăng thêm bội phần công lực. Ahihi! Ở khóa này chúng ta sẽ cùng tìm hiểu cách để điều khiển một giả lập để làm những tool auto hoặc game android điển hình là dự án thực tế được hướng dẫn trong khóa này - TOOL CÀY VIEW CHO WEBSITE.',
                content: 'Trong khoá học này các bạn sẽ được hướng dẫn về: Change Dcom ngầm để thay đổi IP. Làm tool trên giả lập không chiếm chuột & bàn phím.',
                course_requirement: 'Để có đủ khả năng học hiểu các nội dung được đề cập đến trong khóa học. Bạn nên có tối thiểu kiến thức về các phần: LẬP TRÌNH C# CƠ BẢN. LẬP TRÌNH KEYLOGGER VỚI C#. LẬP TRÌNH WINFORM CƠ BẢN',
                lessons: [
                    {
                        name: 'Cài đặt Leapdroid',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Pwk-xzvzfsU?si=apEu1vlSBqtoyCwk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Change ngầm DCOM',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jEZIa6Ov3wI?si=2BQ4Rw7V_zYx7G3V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Mở webbrowser',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/y7Rn98aZri0?si=Ez5XFGngODvwf5OR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Vào bài viết đầu tiên trong Howkteam.com',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4__To0dbqPs?si=oye9Y9CCRcpBGX0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Hoàn thiện tool cày view',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/uS2FaP0oSGE?si=i9K0MGrBnFbcI0yl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                ]
            },
            {
                name: 'Lập trình Http Request với C#',
                banner: '../assets/img/HTTP_request.png',
                introduction: 'Chào mừng các bạn đến với khóa học LẬP TRÌNH HTTP REQUEST VỚI C#, khóa học đầu tiên trong cụm khóa học về Auto C# của Howkteam.com. Mục đích hướng tới là các bạn có thể làm auto bằng C# mà không cần dùng tới các ngôn ngữ như AutoIT, C++,…',
                content: 'Trong khoá học này các bạn sẽ được hướng dẫn về: Cách lấy dữ liệu từ một website. Get & post dữ liệu (ví dụ: chấp nhận bạn bè facebook; lấy dữ liệu từ website nghe nhạc). Kỹ thuật vượt normal captcha, re-captcha. Upload file lên website hoặc hệ thống bất kỳ. Tải hình ảnh, file, video…. Verify email, fake IP',
                course_requirement: 'Để có đủ khả năng học hiểu các nội dung được đề cập đến trong khóa học. Bạn nên có tối thiểu kiến thức về các phần: LẬP TRÌNH C# CƠ BẢN. LẬP TRÌNH KEYLOGGER VỚI C#. LẬP TRÌNH WINFORM CƠ BẢN',
                lessons: [
                    {
                        name: 'Get data từ website Howkteam.com dùng Http Request',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/eDMBXsZPa14?si=4qxPqHKawrWl0N0L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Get data Howkteam kèm cookie dùng HttpRequest',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4CE67ByzpRU?si=aKeXtcnclyE28Hdx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Post data login website howkteam dùng Http Request',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/OW_gwomW0-I?si=xuxtooWzTZ_eUgrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Upload file với C# dùng Http Request',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/eR24k09k5gw?si=EjVAbBKjwo6F3SK9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Vượt normal captcha VTC dùng Http Request',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7HNegPRBl10?si=UuZAcuZSQhh2ymM3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Vượt recapthca với C# dùng Http Request',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/V04dw6tmSk4?si=OyMZr40NKKm4o5uM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Verify email với C# dùng Http Request',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2W6zxRl1rXU?si=aBO8n1NhrmHOUrk2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Tải file với C# dùng Http Request',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ouGe6slE6Hc?si=wD0t9vC7EHB9mDmN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Fake IP với C# dùng Http Request',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Pvzf2cEb6Es?si=mJ73X9gZ32Q4IwOX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Multi threading với C# dùng Http Request',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7bjY4rwGHx4?si=ge0QLr1mahQ8Ai6r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    }
                ]
            }
        ]
    },
    {
        course_name: 'Lập trình C++',
        icon: '../assets/icon/icon-cpp.png',
        banner: '../assets/img/cpp-course.png',
        price: '250.000',
        originPrice: '300.000',
        viewer: 2637,
        hours: 124,
        courses: [
            {
                name: 'Khóa học lập trình C++ căn bản',
                banner: '../assets/img/CPlusPlusBasic.jpg',
                introduction: 'Hiện nay, C++ đã là cái tên rất quen thuộc trong ngành lập trình. Mặc dù C++ là ngôn ngữ lập trình đã ra đời khá lâu, nhưng không phải ai cũng có cơ hội để tìm hiểu về nó.',
                content: 'Trong khoá học này, mình sẽ dạy các bạn về các kiến thức cơ bản nhất trong lập trình bằng ngôn ngữ C++',
                course_requirement: 'Serial dành cho những bạn chưa có bất kỳ kiến thức gì về lập trình, hoặc những bạn mất căn bản muốn lấy lại kiến thức nền tảng lập trình, cụ thể là C++.',
                lessons: [
                    {
                        name: 'Xây dựng chương trình C++ đầu tiên với Visual Studio 2015',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/q8UGqw6Cbnk?si=MjMDn4Sq7BPw3WCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Cấu trúc một chương trình C++ (Structure of a program)',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/IXzH3pYM_bg?si=bNVcjVHrZgTujW-e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Ghi chú trong C++ (Comments in C++)',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Z-laY5MmTIE?si=doWyGN4-rHmkdHIB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Biến trong C++ (Variables in C++)',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/i3nJyEt42Y8?si=PNRiuIrVy8cAO0t8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Số tự nhiên và Số chấm động trong C++ (Integer, Floating point)',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wE3WhKbExN8?si=sUHJ59Gdo1IWdzaV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Kiểu ký tự trong C++ (Character)',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/xt5rScAb9lI?si=gWhG5JW52IpUlxOC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Kiểu luận lý và cơ bản về Câu điều kiện If (Boolean and If statements)',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3-G-MLXj5n0?si=psKTK3Fxow_XSRsq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    }
                ]
            },
            {
                name: 'Bài toán kinh điển trong lập trình',
                banner: '../assets/img/Algorithms-in-CPP.jpg',
                introduction: 'Serial dành cho những bạn cần luyện tập phương pháp, tu duy lập trình. Làm quen với các bài toán trong lập trình, ngẫu nhiên từ cơ bản đến nâng cao.',
                content: 'Trong phần này, mình sẽ cung cấp những bài toán thường gặp trong lập trình giúp bạn có được những tư duy cần thiết cho sau này',
                course_requirement: 'Để có thể làm tốt các bài tập bạn cần học xong khóa học lập trinh C++ căn bản',
                lessons: [
                    {
                        name: 'Tìm giai thừa của một số (Find Factorial of Number)',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LlvbOxM01ow?si=DN1Lj6q_HeX3zYVn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Bài toán tính tiền Taxi',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hHroO7Ez_ng?si=lQ0g6bT0WoFRHjVW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Tổng các chữ số của số nguyên',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WFFBWFY4OVY?si=Oqx-y8emi-xFWTyQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Kiểm tra số đối xứng',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/sHIaddxAm5Y?si=bz6LAfCHOOKffHrq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Đếm số chữ số của số nguyên dương',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jKKxL8W9xxQ?si=o20Mu_DK_F-as5mV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Tìm giai thừa của một số (Find Factorial of Number)',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LlvbOxM01ow?si=lwVG80iDcREXEDwQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Kiểm tra số tự mãn (Narcissistic Number)',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/IKil5U904lE?si=hob3ynqLJegcE4v7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    }
                ]
            }
        ]
    },
    {
        course_name: 'Lập trình Android',
        icon: '../assets/icon/icon-android-app.webp',
        banner: '../assets/img/android-course.jpg',
        price: '130.000',
        originPrice: '150.000',
        viewer: 5647,
        hours: 76,
        courses: [
            {
                name: 'Khóa học lập trình Android cơ bản',
                banner: '../assets/img/Android-basics .jpg',
                introduction: 'Serial dành cho những bạn đã có kiến thức cơ bản về lập trình java, hoặc những bạn mất căn bản muốn lấy lại kiến thức nền tảng Android.',
                content: 'Qua serial này, mình hi vọng các bạn sẽ: Nắm vững kiến thức nền tảng về Android để học những khóa chuyên sâu hơn. Nắm vững các coding convention, naming convention. Thành thạo các thao tác lập trình trên android studio. Biết cách tìm ra lỗi và gỡ lỗi trong lập trình. Và còn nhiều thứ khác chờ các bạn khám phá',
                course_requirement: 'Có kiến thức cơ bản về lập trình bằng ngôn ngữ Java',
                lessons: [
                    {
                        name: 'Giới thiệu lập trình Android và cài đặt môi trường',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/rcH4NbngPEk?si=maDqePRRQ85fGNem" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Các chức năng cơ bản của Android Studio',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/80ayldnOsSI?si=zIiQflkCGw4_l__E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Cài đặt máy ảo Android - Có thể bạn chưa biết',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/QQk0PhOxMV4?si=jdlNisp9us-31dSO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Cách debug cơ bản với Android Studio',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/v2WKdvG2TUA?si=83sZQDKjICEynGJP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Các thành phần giao diện (UI) cơ bản',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2TPjqGpgPvM?si=4bXAJ9UnBr1Qb9Vy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Intent & Manifest trong Lập trình Android',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Y6Yw3wlQIQw?si=GsJlIrVHRi81UMBi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Vòng đời của Activity trong Android',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Jk18f4_L0Ac?si=M91p9WGvCdJNvhFO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Fragment và cơ chế BackStack',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hLDurLNyMB0?si=g65gpnbKxsRCby9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Material Design và Coding Convention',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/5KpN6fxOLWo?si=07OACHH2X4sUBOdF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'ListView và Custom Adapter',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/RCXYMkGB57Q?si=wbYSXoMLmnhpEbgq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    }
                ]
            },
            {
                name: 'Build ứng dụng Voice call/Video call',
                banner: '../assets/img/voice-call.jpg',
                introduction: 'Ngày nay, khi sử dụng nền tảng mạng xã hội như Facebook, Zalo chắc hẳn các bạn đều đã sử dụng tính năng gọi thoại/gọi video của họ. Để xây dựng được những ứng dụng Voice Call/Video Call như trên thì chúng ta có thể tự code server và sử dụng WebRTC để build stream media. Tuy nhiên với cách làm này, Developers sẽ phải bỏ ra nhiều chi phí, công sức để xây dựng từ đầu. Bên cạnh đó, chất lượng cuộc gọi cũng chưa thể đảm bảo 100% tới tay khách hàng.',
                content: 'Trong khóa này Kteam sẽ hướng dẫn đến bạn những nội dung sau: Thêm Stringee SDK vào project. Kết nối Stringee server. Xử lý luồng tạo cuộc gọi đi. Xử lý luồng nhận cuộc gọi đến. Thêm các tính năng phụ: mute, đổi cam, đổi loa, tắt/mở camera. Test lại luồng tạo , nhận cuộc gọi',
                course_requirement: 'Serial này dành cho những bạn đang muốn xây dựng ứng dụng có các tính năng giao tiếp cho users như Call Voice, Call Video với nhau. Ví dụ: app khám bệnh trực tuyến qua video call, app đặt xe cho phép tài xế và khách hàng gọi điện với nhau ngay trên app, hoặc ứng dụng banking cần gọi video để định danh eKYC,...',
                lessons: [
                    {
                        name: 'Build ứng dụng Voice Call trên nền tảng iOS',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hC_3aH9hbZ8?si=bEUrkKCx2UxJdryi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Build ứng dụng Voice Call trên nền tảng Android',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cyLtemVpuuA?si=MC71IwQ99PAIhjQB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Build ứng dụng Voice Call trên nền tảng Web',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/diJEcnuQlJo?si=hKM39aEnJI7zie1j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Tích hợp Push Notification trên iOS',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UlHThxg02jw?si=DzXPrw6U0e0LmWnk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Tích hợp Push Notification trên Android',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/T0KdxDTqHxc?si=ruWdP-qQZlsuPdNT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    }
                ]
            }
        ]
    },
    {
        course_name: 'Lập trình Java',
        icon: '../assets/icon/icon-java.svg',
        banner: '../assets/img/java-course.png',
        price: '400.000',
        originPrice: '500.000',
        viewer: 1637,
        hours: 134,
        courses: [
            {
                name: 'Lập trình Java cơ bản đến hướng đối tượng',
                banner: '../assets/img/Java-core.png',
                introduction: 'Với mục đích giới thiệu đến mọi người về Ngôn ngữ Java -  một ngôn ngữ lập trình khá mới mẻ so với C, C++, Java, PHP ở Việt Nam.',
                content: 'Khoá học sẽ mang đến bạn kiến thức về: Cài đặt & sử dụng môi trường Java. Làm quen & hiểu cách sử dụng các khái niệm nền tảng trong Java. Kiến thức cơ bản như: ép kiểu, vòng lặp, mảng, …. Và tìm hiểu về Java Hướng Đối Tượng.',
                course_requirement: 'Khóa học này yêu cầu sinh viên phải có kiến thức vững chắc về lập trình cơ bản thường được học ở trường như nhập môn, kĩ thuật lập trình, cấu trúc dữ liệu,..',
                lessons: [
                    {
                        name: 'Lịch sử phát triển và tính năng của Java',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3gtOAlcovoQ?si=RgCTVx-5q19vWo4_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Cài đặt môi trường Java',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/KjMRn1YQcLc?si=EHu1hR6E6o3W4zeE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Viết chương trình Java đầu tiên',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jIQmebw9VaA?si=ThdCnKDvOpITXmeV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Các biến trong Java',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/G2mCSTtBojM?si=Uonv_PX8T5q-iMxf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Các kiểu dữ liệu trong Java',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4k_5vWY2wps?si=WINq-Me3oIUwyGEq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Các toán tử trong Java',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/H9FmP010A_Q?si=4hkR5W5mendNosgD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Hằng trong Java',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dqybUkGCaVw?si=Xl4dW1wjcNX6pfev" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Ép kiểu trong Java',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kOMiIKLCK34?si=94P3YaBt8kySDXX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                ]
            },
            {
                name: 'Lập trình JavaFX Cơ bản',
                banner: '../assets/img/JavaFx_lecture.png',
                introduction: 'JavaFX là một công nghệ phát triển giao diện máy tính trên nền tảng Java nhằm thay thế công nghệ cũ Java Swing, Java AWT với những cấu trúc và cách viết dễ sử dụng, thân thiện với lập trình viên nhiều hơn',
                content: 'Qua khoá học JavaFX Cơ bản, Kteam sẽ cung cấp những kiến thức lập trình cơ bản về thiết kế giao diện phần mềm, giúp các bạn có thể tạo ra những phần mềm phục vụ cho học tập và công việc',
                course_requirement: 'Khoá học này sẽ dành cho những người muốn tìm hiểu và nghiên cứu công nghệ Java, các bạn cần phải có kiến thức Java cơ bản đến hướng đối tượng. Khuyến khích những bạn ở lứa tuổi học sinh và sinh viên không thuộc chuyên ngành công nghệ thông tin muốn tìm hiểu về lập trình và áp dụng nó vào trong cuộc sống.',
                lessons: [
                    {
                        name: 'Tạo chương trình cơ bản trong JavaFX',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MNeCK0DDtC8?si=v_DO31Vzn_vOJSFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Thay đổi Scene trong JavaFX',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/twH_cSLWbZA?si=-Rgn-IrAnSNfMf_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Thông báo Alert trong JavaFX',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CUPgxdBGx_c?si=4UTJwijR571SzPkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Thay đổi Dialog trong JavaFX',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/py12K5c7Pc8?si=ak25-e4NPaB0i6Lh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Checkbox trong JavaFX',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/8DNPM6kntRI?si=N9Zt6dVugaEca7Ef" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Property trong JavaFX',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/f0gGfqykR0A?si=HkEq0gvIqlOQyamK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Binding ràng buộc trong JavaFX',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qZ-_7ri24gk?si=qyVJIDliOqo8-BiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    }
                ]
            }
        ]
    },
    {
        course_name: 'Lập trình Python',
        icon: '../assets/icon/icon-python.webp',
        banner: '../assets/img/python-course.jpg',
        price: '300.000',
        originPrice: '350.000',
        viewer: 3532,
        hours: 86,
        courses: [
            {
                name: 'Machine Learning cơ bản với NumPy',
                banner: '../assets/img/Machine-Learning.png',
                introduction: 'Với mục đích giới thiệu đến mọi người về Machine Learning cũng như tạo điểm khởi đầu cho các bạn mới, muốn tham gia và tìm hiểu ban đầu về lĩnh vực khá hot này. Cùng Kteam tìm hiểu về Machine Learning cơ bản với ngôn ngữ Python.',
                content: 'Trong khóa học này bạn sẽ được hướng dẫn các thuật toán Machine Learning: Supervised Learning: Regression. Supervised Learning: Classification. Normalize Feature. Regularized Machine Learning. Neural Network. Unsupervised Learning',
                course_requirement: 'Để có đủ khả năng học hiểu các nội dung được đề cập đến trong khóa học. Bạn nên có tối thiểu kiến thức về LẬP TRÌNH PYTHON CƠ BẢN.',
                lessons: [
                    {
                        name: 'Giới thiệu Machine Learning và Cài đặt NumPy',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_ZjIv2D6T40?si=5XSvTFPeOFWPDE6P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Ma trận và vector với NumPy',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/oykpEGJrf20?si=KfNVCxsUve3jM2iD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Giới thiệu Linear Regression và hàm hθ(x)',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_KfLLePcgCs?si=sKT9DWmvThWubK8C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Hàm J(θ) cho Linear Regression',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/sLC88fIG9Q8?si=x-FMl6oTiAhJqpXz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Thuật toán Gradient Descent cho Linear Regression',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VwIjFJ-5Zbk?si=-GkXT0mVmsS2rogo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    }
                ]
            },
            {
                name: 'Lập trình Python cơ bản',
                banner: '../assets/img/Python-basic.png',
                introduction: 'Thông qua khóa học LẬP TRÌNH PYTHON CƠ BẢN, Kteam sẽ hướng dẫn các bạn kiến thức cơ bản của Python. Để từ đó, có được nền tảng cho phép bạn tiếp tục tìm hiểu những kiến thức tuyệt vời khác của Python hoặc là một ngôn ngữ khác.',
                content: 'Serial này dành cho các bạn muốn học, tìm hiểu về lập trình và muốn tìm một ngôn ngữ dễ học cho người mới bắt đầu, có khuynh hướng làm về mảng “Khoa học máy tính”. ',
                course_requirement: 'Khóa học này không có những yêu cầu khắt khe về kiến thức nền. Do đó nếu bạn là một người không biết nhiều về lập trình cũng có thể tiếp cận - Bạn cũng không cần phải là một thiên tài toán học',
                lessons: [
                    {
                        name: 'Giới thiệu ngôn ngữ lập trình Python',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/NZj6LI5a9vc?si=bFTABnoitSp5B67h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Cài đặt môi trường Python',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jf-q_dG8WzI?si=Kq3XZlJ_ZX37Ji3h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Cách chạy chương trình Python',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/QFxqY8qv42E?si=kehnvaHbzZ9VEK-C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Cách ghi chú trong Python',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/t3dERE9T5yg?si=zHCiNN_cef7gPx81" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Biến trong Python',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/nclE18Yl-kA?si=okyMMuF_lvSYziPU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Kiểu dữ liệu số trong Python',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/IAVvgqDBiv0?si=VeOHQj0cQMXLM2o-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    }
                ]
            },
            {
                name: 'Giải ngố AI',
                banner: '../assets/img/understand-AI.jpg',
                introduction: 'Series này sẽ tập trung vào ứng dụng AI, train AI bằng ngôn ngữ lập trình python. Có thể dùng google colab để tăng tốc train.',
                content: 'Trong khóa học này mình sẽ giúp bạn hiểu được các khía cạnh chuyên sâu của AI qua ngôn ngữ Python',
                course_requirement: 'Để học tốt khóa học bạn cần học qua python cơ bản và có kiến thức về Machine Learning',
                lessons: [
                    {
                        name: 'Train model giải normal captcha với google colab',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VUEb8swYRfM?si=FMNDHfLOsFqsu_XT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Object detection - Tìm vật thể trong hình với Tensorflow',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/H8g5AFpKRgE?si=NvveFKSBrS8kDci0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    }
                ]
            }
        ]
    },
    {
        course_name: 'Lập trình JavaScript - (Website)',
        icon: '../assets/icon/icon-javascript.png',
        banner: '../assets/img/javascript-course.jpg',
        price: '300.000',
        originPrice: '400.000',
        viewer: 2324,
        hours: 212,
        courses: [
            {
                name: 'Khóa học JavaScript cơ bản',
                banner: '../assets/img/Javascript-basic.png',
                introduction: 'JavaScript là một trong những ngôn ngữ lập trình phổ biến nhất thế giới, được sử dụng để phát triển các ứng dụng web và game, cũng như nhiều loại công việc khác',
                content: 'Bằng việc tham gia khóa học này, bạn sẽ được học các khái niệm như biến, hàm, vòng lặp, điều kiện, các sự kiện, hàm trong JavaScript, và rất nhiều khái niệm cơ bản đến chuyên sâu khác.',
                course_requirement: 'Khóa học này không đòi hỏi kiến thức nền tảng nhiều, nên giả sử như bạn chưa biết gì về lập trình, bạn vẫn có thể tham gia. Do đó dù bạn có là một người trái ngành cũng có thể tiếp cận - Đồng thời bạn cũng không cần phải là một thiên tài toán học để tham gia khóa học này 😉.',
                lessons: [
                    {
                        name: 'Tải và cài đặt môi trường nodejs',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lwsS-ikKnPs?si=xvRii3mKvS6_FQ3G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Chạy một chương trình Js cơ bản bằng node, làm việc với file text',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cbZfmmIlzaU?si=mgNRwYuTyqgaHJr4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Chú thích - keywords - khối lệnh',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/iKKLyNxapP8?si=GCYwWkd49_pwX3tJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    }
                ]
            }
        ]
    },
    {
        course_name: 'Lập trình Front - End',
        icon: '../assets/icon/icon-font-end.png',
        banner: '../assets/img/front-end-course.jpg',
        price: '250.000',
        originPrice: '300.000',
        viewer: 4356,
        hours: 90,
        courses: [
            {
                name: 'Lập trình Front End cơ bản với website Landing Page',
                banner: '../assets/img/Intro_Frontend.png',
                introduction: 'Nếu bạn yêu thích lập trình web nhưng còn lơ ngơ không biết bắt đầu từ đâu hay đã biết cơ bản mà chưa làm được một sản phẩm nhất định nào, thì đây chính là khóa học dành cho bạn – LẬP TRÌNH FRONT END CƠ BẢN VỚI WEBSITE LANDING PAGE.',
                content: 'Trong khoá học này các bạn sẽ được hướng dẫn các kiến thức Front end cơ bản cùng cách tạo ra một website Landing Page qua các nội dung: Cú pháp HTML, CSS cơ bản. Cách sử dụng hiệu quả hình ảnh, font chữ và icon trong tạo web Landing Page. Sử dụng jquery tạo các hiệu ứng đẹp mắt cho trang web. Tạo Responsive website. Tối ưu hóa trang web. Cách làm việc với Visual Studio code',
                course_requirement: 'Serial này dành cho tất cả những bạn yêu thích & mong muốn tìm hiểu về lập trình web, đặc biệt là các bạn muốn khởi đầu với một dự án cực kỳ căn bản.',
                lessons: [
                    {
                        name: 'Tổng quan về HTML và các cú pháp cơ bản',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cA_My615iFk?si=0Hv65C33TPNCVr1w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Tìm hiểu về CSS và các cú pháp cơ bản của CSS',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/z699narBw_A?si=Rbrt1_I2y0p1uB7v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Cách sử dụng màu trong CSS',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ASpHS7BPZWA?si=OIW4I8iu5tyO40Z7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'CSS Model box',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/pnIcgkTDycY?si=6mxHZBge6AWjjzLB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'ID, class trong HTML và thuộc tính float trong CSS',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Pr58FL8fvK4?si=3H0v5I0U1ms8Mbty" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Thuộc tính Position trong CSS',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4EhbMESZZeo?si=7Uc0HO231P7LCj6W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Hoàn thiện trang Blog',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/nJ7vdNg3PuM?si=GzOoxI3szyiSIrhb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    }
                ]
            },
            {
                name: 'Lập trình CSS và SASS nâng cao với dự án website Landing Page',
                banner: '../assets/img/CSS_SASS.png',
                introduction: 'Trong combo Front End 2019, chúng ta sẽ cùng nhau tìm hiểu và áp dụng những kiến thức chuyên sâu về CSS.',
                content: 'Trong khóa này các bạn sẽ được hướng dẫn: Cách hoạt động của CSS. Các features mới của CSS áp dụng cho modern browser (các thế hệ browser cũ không hỗ trợ) ví dụ: clip-path, perspective, background-clip, …. Hướng dẫn Sass. Hướng dẫn cài đặt Node, giới thiệu về NPM, xây dựng môi trường để sử dụng Sass cấu trúc và thiết kế file CSS. Sử dụng BEM để đặt tên class, cấu trúc component để thiết kế website. Tự thiết kế grid system. Các nguyên tắc thiết kế responsive. Sử dụng sass tạo web responsive. Test browser supports',
                course_requirement: 'Khóa học này không dành cho các bạn bắt đầu làm quen với HTML và CSS, vậy nếu bạn mới làm quen với CSS thì hãy tham khảo khóa FRONTEND CƠ BẢN của Kteam trước nhé!',
                lessons: [
                    {
                        name: 'Code header của project Landingpage 2019',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CwPoXU2DKXo?si=Oma7x-BHhfIMDpGb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Tạo hình cho background image với CSS Clip-path',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/idXYTvNzPoU?si=iThneNgWX8F0XI_B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Tạo Button và hiệu ứng của nó cho Website Landing Page 2019',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/KYwdIOtvWfU?si=7GeHCFSpNX9ez7ls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Tạo hiệu ứng zoom in, zoom out cho button khi hover',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_2Wl8vc4Rj8?si=sK_Yl8hYlAZp4N31" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Hiệu ứng Animation cho Header website Landing Page 2019',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_IBu1pC9HdY?si=m9gJgambj9_eu07N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    }
                ]
            }
        ]
    },
    {
        course_name: 'Phân tich thiết kế',
        icon: '../assets/icon/icon-analyst.jpg',
        banner: '../assets/img/analyst-course.jpg',
        price: '0',
        originPrice: '0',
        viewer: 4054,
        hours: 40,
        courses: [
            {
                name: 'Phân tích thiết kế phần mềm',
                banner: '../assets/img/PTTK.jpg',
                introduction: 'Khóa học phân tích thiết kế phần mềm. Giúp bạn nắm được tư duy phân tích. Thiết kế một hệ thống. Không chỉ phần mềm, mà cả cho cuộc sống của bạn.',
                content: 'Qua khóa học này các bạn sẽ nắm những kiến thức: Các quy trình phát triển phần mềm. Tạo lược đồ Use-Case. Tạo lược đồ Activity Diagram. Tạo ER Diagram. Các chiến lược phân tích ERD. Từ mô hình Thực thể kết hợp thành mô hình quan hệ. Tạo Cơ Sở dữ liệu từ mô hình quan hệ. Thiết kế giao diện người dùng. Kiến trúc phần mềm',
                course_requirement: 'Khóa học chủ yếu chia sẽ kinh nghiệm về phân tích thiết kế phần mềm nên sẽ không có yêu cầu cho khóa học này',
                lessons: [
                    {
                        name: 'Giới thiệu về Phân tích thiết kế phần mềm',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VLL77XefAHQ?si=71kR-0wHOIs9KPkt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Tạo lược đồ Use - Case trong PTTKPM',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/46S10eiEvms?si=cwwY98kijxSBO8CH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Tạo Activity - Diagram trong PTTKPM',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/QRar3e5Hiow?si=p0u5oI2Aw7UEQLcp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Giới thiệu về ER Diagram trong PTTKPM',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/KmqOajhoqAg?si=0pRAN66xU4upfuF0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Chiến lược phân tích ER Diagram trong PTTKPM',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qEG28OqC_wI?si=3FH008b40Ar2cAnq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Chiến lược phân tích dữ liệu trong PTTKPM',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2y2DFun29so?si=HuQ4B0x-yFcx7nC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Tạo cơ sở dữ liệu từ lược đồ quan hệ trong PTTKPM',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_JOAMwEZ0Fw?si=f7CNbIpBlDs5pE3l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Thiết kế giao diện người dùng trong PTTKPM',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mBZhl6a7cpg?si=pQF2Blg8CJBMEbDP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Kiến trúc và phân chia dữ liệu trong PTTKPM',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/eD_hHQvjWFs?si=zjAMqRnfwbDpFkep" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    }
                ]
            },
            {
                name: 'Sử dụng SQL server',
                banner: '../assets/img/SQL-Tutorials.png',
                introduction: 'Với hệ thống nhỏ, chúng ta hoàn toàn có thể lưu trữ dữ liệu bằng file để khi tắt ứng dụng dữ liệu chúng ta vẫn còn được lưu giữ. Nhưng với hệ thống lớn, truy vấn tìm kiếm, thao tác với dữ liệu trên file không còn dễ dàng và hiệu quả nữa. Và SQL ra đời để giải quyết vấn đề đó.',
                content: 'Qua serial này, Kteam hy vọng các bạn sẽ: Nắm vững kiến thức nền tảng về SQL server để học những khóa chuyên sâu hơn. Biết cách sử dụng ngôn ngữ truy vấn SQL và T-SQL với SQL sevrer.',
                course_requirement: 'Serial này dành cho những bạn chưa có bất kỳ kiến thức gì về lập trình, hoặc những bạn mất căn bản muốn lấy lại kiến thức nền tảng về SQL Server.',
                lessons: [
                    {
                        name: 'Giới thiệu SQL và SQL server',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2fanjSYVElY?si=mMdFLJ6sDahaSZsx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Khởi tạo Database trong SQL Server',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/XUIm5VQlpJM?si=70RTF77x1tWu3BZG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Khởi tạo, xóa, sửa Table trong SQL Server',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TrLKdQH_Qng?si=whfe_3PQk2Cu2D-U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Kiểu dữ liệu trong SQL Server',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_40bzGOHloo?si=9Zs2Weq-Dl2m2J9C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Insert, Delete, Update Table trong SQL Server',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/viVwygluDDY?si=Xd5lmzZiMMqn1kXe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Tạo khóa chính trong SQL Server',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/38FxjicRCS8?si=3iecEwOEljTfBeAD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Khóa ngoại trong SQL Server',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/nm6qg6sinLU?si=rO77O312bSLABvqG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Truy vấn cơ bản trong SQL Server',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/iZ9kQIke04A?si=EZKoigVtj_wWeHK5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    }
                ]
            },
            {
                name: 'Khóa Thực chiến SQL cùng Kteam - Dự án quản lý sinh viên',
                banner: '../assets/img/TC-SQL.png',
                introduction: 'Ở combo Thực chiến SQL, chúng ta sẽ cùng nhau phân tích các CSDL đó từ đặc tả và ứng dụng các kiến thức đã học ở hai khóa trên vào việc giải quyết các yêu cầu thực tế của một CSDL. Trong bộ khóa học này các bạn sẽ đi qua các kiến thức từ cơ bản đến nâng cao qua các dự án khác nhau.',
                content: 'Ở phần này, chúng ta sẽ cùng nhau tìm hiểu Dự án Quản lý sinh viên cực kỳ cơ bản.',
                course_requirement: 'Bạn sẽ là đối tượng phù hợp của khóa này nếu: Bạn mất căn bản và muốn học lại SQL từ đầu. Bạn đã học qua lý thuyết mà chưa ứng dụng được bao nhiêu. Bạn muốn củng cố lại kiến thức đã học từ lâu.',
                lessons: [
                    {
                        name: 'Phân tích đặc tả dự án Quản lý sinh viên',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/L0xh7a_tdYo?si=k_xuaQJ0_NTtKzeK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Cài đặt CSDL và xác định khóa chính, khóa ngoại trong dự án Quản lý sinh viên',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/BPkf0quLeso?si=P6D5vWPw36TB7mm1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Nhập dữ liệu và thực hành truy vấn với CSDL dự án Quản lý sinh viên',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kjea93a4haA?si=PR16CxwNEAoOyrck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Functions trong dự án quản lý sinh viên',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/M1drqLAjBXc?si=amykr6TW8yrR52cQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Stored Procedure trong dự án quản lý sinh viên với SQL Server',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ESs78ZdCETg?si=5o4QnN1-Xjo-i9mY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Ràng buộc trong CSDL Quản lý sinh viên với SQL Server',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/rUpOmHYKvKg?si=OHP8wYVchx07qbw3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    }
                ]
            }
        ]
    },
    {
        course_name: 'Chia sẻ kinh nghiệm',
        icon: '../assets/icon/icon-share-exp.png',
        banner: '../assets/img/exp-course.jpg',
        price: '0',
        originPrice: '0',
        viewer: 3454,
        hours: 20,
        courses: [
            {
                name: 'Dành cho người mới',
                banner: '../assets/img/IT-Beginer.jpg',
                introduction: 'Trong khóa học này bạn sẽ được chia sẽ kinh nghiệm cho những bạn mới bắt đầu lập trình.',
                content: 'Những kinh nghiệm từ khóa học giúp bạn có một lối tư duy mở cũng như có một cái nhìn tổng quát về lĩnh vực công nghệ thông tin',
                course_requirement: 'Không có yêu cầu đặc biệt cho khóa học này',
                lessons: [
                    {
                        name: 'Các công việc của ngành lập trình và hành trang cần thiết khi xin việc IT',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/aVGTP8uHa34?si=7rhpiQnimSJL4W-4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    },
                    {
                        name: 'Học lập trình bắt đầu từ đâu???',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/SWeJtSAB4nM?si=FyrDngQqpIVPUmM9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    }
                ]
            }
        ]
    },
];



loadNavCourses();
loadPopularCourse();
loadAllCourses();


function loadNavCourses(){
    navCourseContainer.innerHTML = `<div onclick="gotoAll()">
                                        <img src="../assets/icon/icon_more.png" alt="IC ALL">
                                        <p>Tất cả</p>
                                    </div>`;
    for(var i = 0; i < allCoursesData.length ; i++){
        navCourseContainer.innerHTML += navItems(allCoursesData[i]);
    }
}
function redirect(element){
    const data = JSON.parse(element.getAttribute('data-course'));
    courseDetailParent.innerHTML = loadCourseDetails(data);
    window.location = '#course-details'
}
function loadAllCourses(){
    allPageElements.innerHTML = '';
    for(var i =0 ;i < allCoursesData.length; i++){
        allPageElements.innerHTML += AllCourseFrame(allCoursesData[i]);
    }
}
function loadPopularCourse(){
        var data = sortByViewer();
        popularCoursesParent.innerHTML ='';
        for(var i = 0; i < 5;i++){
            popularCoursesParent.innerHTML += popularCourseCard(data[i]);
        }
}
function loadCourseDetails(data){
    return `<div class="header">
                <img src="${data.banner}" alt="contain-bg">
                <div class="blur-effect"></div>
                <div class="text-container">
                    <p>${data.course_name}</p>
                    <div class="course-info">
                        <div class="lessons">
                            <img src="../assets/icon/icon-book.png" alt="">
                            <p>${data.courses.length} bài học</p>
                        </div>
                        <div class="viewer">
                            <img src="../assets/icon/icon-viewer.png" alt="">
                            <p>${data.viewer}</p>
                        </div>
                        <div class="duration">
                            <img src="../assets/icon/icon-timer.png" alt="">
                            <p>${data.hours} giờ</p>
                        </div>
                    </div>
                </div>
                <div class="back-icon-container">
                    <img onclick='gotoAll()' src="../assets/icon/left-arrow.png" alt="">
                    <p>Tất cả khóa học</p>
                </div>
                <div class="price">
                    <div>
                        <p class="course-price">${data.price} &#273</p>
                        <p class="course-price-discount">${data.originPrice} &#273</p>
                    </div>
                    <div class="btn-buy">Mua Ngay</div>
                </div>
            </div>
            <div class="content">
                <div class="course-container">
                    <div class="lesson-container wrap-items">
                         ${loadCourses(data.courses)}
                    </div>
                </div>
            </div>`;
}
function loadCourses(data){
    var html = '';
    for(var i = 0; i < data.length; i++){
        html += lessonCard(data[i]);
    }
    return html;
}
function popularCourseCard(data){
    return `<div class="course-card">
                            <img src="${data.banner}" alt="android-course">
                            <p class="course-title">${data.course_name}</p>
                            <p class="course-price">${data.price} &#273;</p>
                            <p class="course-price-discount">${data.originPrice} &#273;</p>
                            <div class="course-info">
                                <div class="viewer">
                                    <img src="../assets/icon/icon-viewer.png" alt="ic viewer">
                                    <p>${data.viewer}</p>
                                </div>
                                <div class="course-duration">
                                    <img src="../assets/icon/icon-timer.png" alt="ic timer">
                                    <p>${data.hours} giờ</p>
                                </div>
                            </div>
                        </div>`
}
function lessonCard(data){
    return `<div class="course-card">
                            <img src="${data.banner}" alt="android-course">
                            <p class="course-title">${data.name}</p>
                            <div>
                                <img src="../assets/icon/icon-book.png" alt="">
                                <p>${data.lessons.length} bài học</p>
                            </div>
                        </div>`
}
function navItems(data){
    return `<div onclick='redirect(this)' data-course='${JSON.stringify(data)}'>
                    <img src="${data.icon}" alt="IC ALL">
                    <p>${data.course_name}</p>
            </div>`;
}
function AllCourseFrame(data){
    return `<div class="course-container">
                    <div class="title">
                        <div>
                            <img src="${data.icon}" alt="dot net icon">
                            <p>${data.course_name}</p>
                        </div>
                        <span onclick='redirect(this)' data-course='${JSON.stringify(data)}'>Xem thêm</span>
                    </div>
                    <div class="courses-show">
                        
                            ${loadCourses(data.courses)}
                        
                    </div>
                </div>`;
}
function sortByViewer(){
    var a = allCoursesData;
    for(var i = 0; i < a.length - 1; i++){
        for(var j = i; j < a.length; j++){
            if(a[i].viewer < a[j].viewer){
                var tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
        }
    }
    return a;
}
function gotoHome(){
    window.location = '#home'
}
function gotoAll(){
    window.location = '#all'
}
