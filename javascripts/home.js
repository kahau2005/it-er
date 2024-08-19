const popularCoursesParent = document.querySelector('.content-area .content .course-container .courses-show');
const allPageElements = document.querySelectorAll('#all .content .course-container');


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
                        name: 'Thiết kế cơ sở dữ liệu cho phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/R8HRA72Orkk?si=1nZAURdBNw8ZqBgw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
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
                        name: 'Thiết kế cơ sở dữ liệu cho phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/R8HRA72Orkk?si=1nZAURdBNw8ZqBgw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
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
                        name: 'Thiết kế cơ sở dữ liệu cho phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/R8HRA72Orkk?si=1nZAURdBNw8ZqBgw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
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
                        name: 'Thiết kế cơ sở dữ liệu cho phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/R8HRA72Orkk?si=1nZAURdBNw8ZqBgw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
                    }
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
                        name: 'Thiết kế cơ sở dữ liệu cho phần mềm Quản lý quán cafe với C# Winform',
                        data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/R8HRA72Orkk?si=1nZAURdBNw8ZqBgw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
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
        hours: 124
    },
    {
        course_name: 'Lập trình Android',
        icon: '../assets/icon/icon-android-app.webp',
        banner: '../assets/img/android-course.jpg',
        price: '130.000',
        originPrice: '150.000',
        viewer: 5647,
        hours: 76
    },
    {
        course_name: 'Lập trình Java',
        icon: '../assets/icon/icon-java.svg',
        banner: '../assets/img/java-course.png',
        price: '400.000',
        originPrice: '500.000',
        viewer: 1637,
        hours: 134
    },
    {
        course_name: 'Lập trình Python',
        icon: '../assets/icon/icon-python.webp',
        banner: '../assets/img/python-course.jpg',
        price: '300.000',
        originPrice: '350.000',
        viewer: 3532,
        hours: 86
    },
    {
        course_name: 'Lập trình PHP',
        icon: '../assets/icon/icon-php.png',
        banner: '../assets/img/php-course.jpg',
        price: '200.000',
        originPrice: '350.000',
        viewer: 4356,
        hours: 60
    },
    {
        course_name: 'Lập trình JavaScript - (Website)',
        icon: '../assets/icon/icon-javascript.png',
        banner: '../assets/img/javascript-course.jpg',
        price: '300.000',
        originPrice: '400.000',
        viewer: 2324,
        hours: 212
    },
    {
        course_name: 'Lập trình Front - End',
        icon: '../assets/icon/icon-font-end.png',
        banner: '../assets/img/front-end-course.jpg',
        price: '250.000',
        originPrice: '300.000',
        viewer: 4356,
        hours: 90
    },
    {
        course_name: 'Phân tich thiết kế',
        icon: '../assets/icon/icon-analyst.jpg',
        banner: '../assets/img/analyst-course.jpg',
        price: '0',
        originPrice: '0',
        viewer: 4054,
        hours: 40
    },
    {
        course_name: 'Chia sẻ kinh nghiệm',
        icon: '../assets/icon/icon-share-exp.png',
        banner: '../assets/img/exp-course.jpg',
        price: '0',
        originPrice: '0',
        viewer: 3454,
        hours: 20
    },
];

loadPopularCourse();
loadDotNetCourses();

function loadPopularCourse(){
        var data = sortByViewer();
        popularCoursesParent.innerHTML ='';
        for(var i = 0; i < 5;i++){
            popularCoursesParent.innerHTML += popularCourseCard(data[i]);
        }
}
function loadDotNetCourses(){
    const parent = allPageElements[0].querySelector('.courses-show');
    parent.innerHTML = '';
    for(var i = 0; i < allCoursesData[0].courses.length; i++){
        parent.innerHTML += lessonCard(allCoursesData[0].courses[i]);
    }
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
