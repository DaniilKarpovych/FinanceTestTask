// Core
import { FC } from "react";
import { Statistic, Table } from "antd";
import Title from "antd/lib/typography/Title";
import { AlignType } from "rc-table/lib/interface";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
// Other
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import { getFinanceState } from "../lib/redux/selectors/financeStore";
import { financeModel } from "../types/types";
import { formatDate } from "../helpers/formatDate";
import { useAppDispatch } from "../lib/redux/init/store";
import { selectCompanyActions } from "../lib/redux/actions/selectCompanyActions";
import { getCompanyState } from "../lib/redux/selectors/getSelectedCompany";


export const FinanceTable: FC = () => {
  const data = useSelector(getFinanceState);
  const { selectedCompany } = useSelector(getCompanyState);
  const editData =
    selectedCompany.length === 0
      ? data
      : data.filter(
          (item) => !selectedCompany.find((company) => item.ticker === company)
        );
  const dispatch = useAppDispatch();
  const movieListJSX = () => {
    const columns = [
      {
        title: "Company",
        dataIndex: "ticker",
        key: "ticker",
        align: "left" as AlignType,
      },
      {
        title: "exchange",
        dataIndex: "exchange",
        key: "exchange",
        align: "left" as AlignType,
      },
      {
        title: "price",
        dataIndex: "price",
        key: "price",
        align: "left" as AlignType,
        render: (price: number, record: financeModel) => {
          const arrow =
            record?.direction === "incresed" ? (
              <ArrowUpOutlined />
            ) : record?.direction === "descresed" ? (
              <ArrowDownOutlined />
            ) : null;
          const arrowColor =
            record?.direction === "incresed"
              ? "green"
              : record?.direction === "descresed"
              ? "red"
              : "black";
          return (
            <Statistic
              title="Active"
              value={price}
              precision={2}
              valueStyle={{ color: arrowColor }}
              prefix={arrow}
            />
          );
        },
      },
      {
        title: "change",
        dataIndex: "change",
        key: "change",
        align: "left" as AlignType,
      },
      {
        title: "change percent",
        dataIndex: "change_percent",
        key: "change_percent",
        align: "left" as AlignType,
      },
      {
        title: "dividend",
        dataIndex: "dividend",
        key: "dividends",
        align: "left" as AlignType,
      },
      {
        title: "yield",
        dataIndex: "yield",
        key: "yield",
        align: "left" as AlignType,
      },
      {
        title: "last trade time",
        dataIndex: "last_trade_time",
        key: "last_trade_time",
        align: "left" as AlignType,
        render: (date: string) => formatDate(date),
      },
      {
        key: "direction",
        render: (item: string, record: financeModel) => {
          return (
            <>
              <button
                onClick={() => {
                  dispatch(selectCompanyActions.selectCompany(record.ticker));
                }}
              >
                delete
              </button>
            </>
          );
        },
      },
    ];

    return (
      <>
        <Table
          size="small"
          showHeader={false}
          bordered={true}
          dataSource={editData}
          columns={columns}
          pagination={false}
          rowKey="ticker"
        />
      </>
    );
  };

  return (
    <>
      <Title>Finance</Title>
      {movieListJSX()}
    </>
  );
};
