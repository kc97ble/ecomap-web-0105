import * as React from "react";
import { Card, Container } from "react-bootstrap";

const SectionMainActivity = () => {
  const Story = (props: any) => {
    const { title, children, icon } = props;
    return (
      <div>
        <h4>{title}</h4>
        <Card border="">{children}</Card>
      </div>
    );
  };

  return (
    <Container className="my-5 py-5">
      <h3>Dự án bao gồm 3 hoạt động chính:</h3>
      <Story title="Ecomap website">
        Bản đồ dữ liệu mở về các dự án môi trường của thanh niên được hiển thị
        trực quan chia theo từng chủ đề và khu vực địa lý.
      </Story>
      <Story title="Ecomap training">
        Cung cấp các khóa học từ cơ bản đến nâng cao về kiến thức triển khai và
        xây dựng một dự án cộng đồng. Tại đây, trao cho thanh niên cơ hội được
        học tập bình đẳng bất kể bạn là ai, ở đâu cũng có cơ hội để tham gia vào
        các hoạt động ý nghĩa.
      </Story>
      <Story title="Ecomap stories">
        Tổng hợp chuỗi các câu chuyện truyền cảm hứng được ghi lại một cách chân
        thực từ các dự án trên cả nước. Qua đây, các bạn trẻ có thể học hỏi kinh
        nghiệm lẫn nhau từ những mô hình đã triển khai thực tế.
      </Story>
    </Container>
  );
};

export default SectionMainActivity;
