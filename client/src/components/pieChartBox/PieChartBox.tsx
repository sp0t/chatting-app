import { useEffect } from "react";
import { get_online_users } from "../../services";
import { setOnlineUsers, setAllUsers } from '../../slices/userSlice';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import "./pieChartBox.scss";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
// import { io } from "socket.io-client";
// export const socket = io("http://localhost:8000") 

//  socket.on('activeUsers', async (payload) => {
//   data = [
//     { name: "Active Members", color: "#0088fe", value:10 },
//     { name: "Inactive Members",color: "#00c49f", value:7 },
//   ]
//   console.log("socket",payload.length);
// });

const PieChartBox = () => {
 
  const dispatch = useDispatch();
  const onlineUsers = useSelector((state: RootState) => state.User.onlineUsers);
  const allusers = useSelector((state: RootState) => state.User.allusers);
  
  useEffect(() => {
    getOnlineUsers(); 
  }, []);

    const getOnlineUsers = async () => {
    const res = await get_online_users();
    dispatch(setOnlineUsers(res.online.length));
    dispatch(setAllUsers(res.allUsers.length));
  }
  var data = [
    { name: "Active Members", color: "#0088fe", value:onlineUsers },
    { name: "Inactive Members",color: "#00c49f", value:allusers-onlineUsers },
  ]
  return (
    <div className="pieChartBox">
      <h1>Active/Inactive Users</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "6px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"> 
                  {data.map((item) => 
                    (<Cell key={item.name} fill={item.color} /> ))}
            </Pie>
            {/* { allusers?(<Pie
               data={[
                 { name: "Active Members", value: onlineUsers, },
                 { name: "Inactive Members", value:allusers-onlineUsers } ]}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value">
              {data.map((item) => (<Cell key={item.name} fill={item.color} />
               ))}</Pie>) :( <div>chart</div> )} */}
            
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
