import React from "react";
import { Card, Button } from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  DownloadOutlined
} from "@ant-design/icons";

export default class Buttons extends React.Component {
  render() {
    return (
      <div className="width-all">
        <Card title="基础按钮">
          <Button type="primary">IMooc</Button>
          <Button>IMooc</Button>
          <Button type="dashed">IMooc</Button>
          <Button type="danger">IMooc</Button>
          <Button disabled>IMooc</Button>
        </Card>

        <Card title="基础按钮">
          <Button icon={<PlusOutlined />}>创建</Button>
          <Button icon={<EditOutlined />}>编辑</Button>
          <Button icon={<DeleteOutlined />}>删除</Button>
          <Button shape="circle" icon={<SearchOutlined />}></Button>
          <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
          <Button type="primary" icon={<DownloadOutlined />}>下载</Button>
        </Card>

        {/* 
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row> */}
      </div>
    );
  }
}
