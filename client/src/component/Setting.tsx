import { Row } from "antd";
import { Button } from "antd/lib/radio";
import { FC } from "react";
import 'antd/dist/antd.css';
import { useSelector } from "react-redux";
import { getSocket } from "../lib/redux/selectors/getSocket";
import { useAppDispatch } from "../lib/redux/init/store";
import { selectCompanyActions } from "../lib/redux/actions/selectCompanyActions";

export const Setting: FC = () => {
  const socket = useSelector(getSocket)
  const dispatch = useAppDispatch()
  return (
      <Row>
        <Button type="primary" onClick={()=>dispatch(selectCompanyActions.resetCompany())}>Cancel Delete</Button>
        <Button type="primary" onClick={()=>socket.disconnect()}>Switch Off Update</Button>
      </Row>
  );
};
