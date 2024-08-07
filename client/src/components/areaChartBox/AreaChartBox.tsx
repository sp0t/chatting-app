import { useEffect } from "react";
import "./areaChartBox.scss";
import { get_growth } from "../../services";
import { setGrowth } from '../../slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaChartBox = () => {

  const dispatch = useDispatch();
  const growth = useSelector((state: RootState) => state.User.growth);
  useEffect(() => { getGrowth(); }, []);
  const getGrowth = async () => {      
    const res = await get_growth();
    // console.log(res?.data);
    dispatch(setGrowth(res?.data))
  }

  return (
    <div className="areaChartBox">
      <h1>Grow rate over time</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={growth}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="electronic"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="books"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaChartBox;
