import "./topBox.scss";
import { useEffect } from 'react';
import { get_top_constributers } from "../../services";
import { RootState } from '../../store/store'
import { setTopConstributers } from '../../slices/userSlice';
import { useDispatch, useSelector } from 'react-redux'

const TopBox = () => {

  const dispatch = useDispatch();
  const topUsers:any[] = useSelector((state: RootState) => state.User.topUser)
  useEffect(() => { getTopConstributers(); }, []);

  const getTopConstributers = async () => {      
  const res = await get_top_constributers();
  dispatch(setTopConstributers(res?.data))
}

  return (
    <div className="topBox">
      <h1>Top Constributers</h1>
      <div className="list">
        {topUsers ? topUsers.map((topUser,index) => (
      <div className="listItem" key={index}>
        <div className="user">
              <div className="avatar placeholder tooltip tooltip-open tooltip-top">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                  <span>{topUser.name.substring(0, 2)}</span>
                </div>
              </div>
              <div className="userTexts">
                <span className="username">{topUser.name}</span>
                <span className="email">{topUser.email}</span>
              </div>
        </div>
      </div>
    )):(<div>No Users</div>)}
      </div>
    </div>
  );
};

export default TopBox;
