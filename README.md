
# Student and Course Management System 

Dự án này là một hệ thống quản lý sinh viên và khóa học cơ bản sử dụng **Node.js** và thư viện **MongoDB driver**. Mục tiêu của bài tập là thực hiện các thao tác CRUD (Create, Read, Update, Delete) và các truy vấn nâng cao trên cơ sở dữ liệu NoSQL.

## 🏗 Cấu trúc dự án

Dự án được tổ chức thành 2 file chính để tách biệt logic xử lý và luồng điều khiển:

* **`dboperations.js`**: Chứa tất cả các hàm chức năng như kết nối database, chèn dữ liệu, truy vấn, cập nhật và xóa.


* **`index.js`**: File thực thi chính, gọi các hàm từ `dboperations.js` theo trình tự logic.



## 🚀 Hướng dẫn khởi chạy

### 1. Yêu cầu hệ thống

* Đã cài đặt **Node.js**.
* 
**MongoDB Server** đang chạy tại địa chỉ mặc định `mongodb://localhost:27017`.

### 2. Cài đặt thư viện

Mở terminal tại thư mục dự án và chạy:

```bash
npm install mongodb

```
### 3. Chạy ứng dụng

```bash
node index.js

```

## 📊 Các tính năng đã hoàn thiện

Hệ thống thực hiện đầy đủ các bước yêu cầu trong Tutorial 10:

* **Kết nối Database**: Kết nối tới server MongoDB và tạo database tên `school`.


* **Quản lý Sinh viên (Collection: `students`)**:
 * Chèn thông tin sinh viên mới (John, Anna, Mike).


* Truy vấn sinh viên theo tên (findOne) hoặc theo độ tuổi (> 20 tuổi).


* Cập nhật chuyên ngành (Major) và sử dụng tùy chọn `upsert` để thêm sinh viên mới.


* Sắp xếp sinh viên theo tuổi tăng dần và giới hạn kết quả trả về.

* **Quản lý Khóa học (Collection: `courses`)**:
* Chèn các khóa học mẫu (Database Systems, AI...).
* Truy vấn toàn bộ danh sách khóa học và xóa toàn bộ dữ liệu khi cần thiết.
📊 Results & Evidence

Dưới đây là kết quả thực hiện các thao tác trên MongoDB tương ứng với từng bước trong bài tập:
1. Database & Collections

    Database: school được tạo thành công trên MongoDB.

    Collections: Hai bảng dữ liệu students và courses đã được khởi tạo.

2. CRUD Operations Performance

    Insert: Dữ liệu của 3 sinh viên (John, Anna, Mike) và 3 khóa học đã được lưu trữ thành công.

    Update: Chuyên ngành của John đã được đổi từ "Math" sang "Statistics".

    Upsert: Sinh viên "Tom" đã được tự động thêm vào vì chưa tồn tại trong hệ thống.

    Delete: Xóa thành công bản ghi của sinh viên "Mike" và dọn dẹp toàn bộ dữ liệu trong bảng courses.

3. Query Results

Hệ thống đã thực hiện các truy vấn phức tạp và trả về kết quả chính xác trong Terminal:

    Advanced Query: Lọc thành công danh sách sinh viên có tuổi > 20.

    Filtering: Tìm kiếm chính xác sinh viên thuộc chuyên ngành "Computer Science".

    Sort & Limit: Danh sách sinh viên được sắp xếp theo tuổi tăng dần và giới hạn hiển thị 2 kết quả đầu tiên.

🛠 Technical Highlights

    Separation of Concerns: Sử dụng dboperations.js để đóng gói logic DB, giúp code dễ bảo trì và mở rộng.

    Asynchronous Processing: Tận dụng async/await để xử lý các truy vấn MongoDB mà không làm nghẽn luồng điều khiển của ứng dụng.

    Error Handling: Đã thiết lập cơ chế bắt lỗi khi kết nối database không thành công để tránh crash ứng dụng.
