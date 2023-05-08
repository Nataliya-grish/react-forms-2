import WorkoutItem from "./WorkoutItem";
import PropTypes from "prop-types";

export default function TableData({ statistic, deleteStep, changeStep }) {
  return (
    <div className="TableData">
      <div className="labelTableData">
        <span className="TableData__item">Дата(ДД.ММ.ГГГГ)</span>
        <span className="TableData__item">Пройдено км</span>
        <span className="TableData__item">Действие</span>
      </div>
      <ul className="workout__table">
        {statistic.map((item) => (
          <WorkoutItem
            key={item.id}
            item={item}
            deleteStep={deleteStep}
            changeStep={changeStep}
          />
        ))}
      </ul>
    </div>
  );
}

TableData.defaultProps = {
  statistic: []
};

TableData.propTypes = {
  statistic: PropTypes.array,
  changeStep: PropTypes.func.isRequired,
  deleteStep: PropTypes.func.isRequired
};
