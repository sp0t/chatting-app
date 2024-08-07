import { useEffect } from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import "./chartBox.scss";
import { chartBoxRevenue as chartProps } from '../../data';
import { get_chart_day } from "../../services";
import { setDayMessage } from '../../slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const ChartBox = () => {
  const dispatch = useDispatch();
  const dayMessage = useSelector((state: RootState) => state.User.dayMessage);
  useEffect(() => { getChartDay(); }, []);
  const getChartDay = async () => {      
    const res = await get_chart_day();
    // console.log(res?.data);
    dispatch(setDayMessage(res?.data))
  }
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={chartProps.icon} alt="" />
          <span>{chartProps.title}</span>
        </div>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={dayMessage}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 50 }}
              />
              <Line
                type="monotone"
                dataKey={chartProps.dataKey}
                stroke={chartProps.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="duration">Every Day</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
