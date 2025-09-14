*, "ts-node-dev": chạy code TypeScript mà không cần build (tương tự nodemon) chỉ dành cho dự án expressjs sử dụng ts
*, "@types/node"," @types/express": cung cấp type definitions;
*, tsx là một Node.js runtime cho TypeScript và ESM (ECMAScript Module).
  +, Nó giống như ts-node hoặc ts-node-dev, nhưng:
  +, Nhanh hơn (vì build bằng esbuild).
  +, Hỗ trợ ESM (import/export) chuẩn.

Không cần config phức tạp.
sequielize-cli là một công cụ giúp tạo model, migrate, seed một cách dễ dàng
.https://viblo.asia/p/tim-hieu-va-su-dung-sequelize-va-sequelize-cli-jvElaRY65kw#_cai-dat-0

"SequelizeMeta" là bộ nhớ/nhật ký migration. Nó giống như lịch sử Git commit nhưng dành cho database.

Sequelize sẽ:

So sánh danh sách file trong thư mục migrations/ với dữ liệu trong bảng SequelizeMeta.
# Sequelize sẽ:
Chạy những file migration chưa có trong SequelizeMeta.
Sau khi chạy xong, Sequelize sẽ ghi thêm tên file đó vào SequelizeMeta.
Khi rollback (db:migrate:undo), Sequelize sẽ:

Xóa bản ghi tương ứng trong SequelizeMeta.

Undo các thay đổi trong DB (theo code down trong migration).