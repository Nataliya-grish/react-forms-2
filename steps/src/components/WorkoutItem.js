import PropTypes from "prop-types";

export default function WorkoutItem({ item, deleteStep, changeStep }) {
  return (
    <li className="Workout__item">
      <div>{`${item.date.slice(8, 10)}.${item.date.slice(5, 7)}.${item.date.slice(0, 4)}`}</div>
      <div>{Number(item.distance).toFixed(2)}</div>
      <div>
        <button className="btn-icons" data-title="редактировать" onClick={() => changeStep(item.id)}>
          ✎
        </button>
        <button className="btn-icons" data-title="удалить" onClick={() => deleteStep(item.id)}>
          ✗
        </button>
      </div>
    </li>
  );
}
WorkoutItem.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string,
    date: PropTypes.string,
    distance: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired,
  deleteStep: PropTypes.func.isRequired,
  changeStep: PropTypes.func.isRequired,
};
