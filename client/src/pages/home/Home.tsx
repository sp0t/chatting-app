import AreaChartBox from "../../components/areaChartBox/AreaChartBox";
import ChartWeek from "../../components/chartBox/ChartWeek";
import ChartDay from "../../components/chartBox/ChartDay";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox /> 
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box6">
        <ChartDay/>
      </div>
      <div className="box box5">
        <ChartWeek />
      </div>
      <div className="box box7">
        <AreaChartBox />
      </div>
    </div>
  );
};
