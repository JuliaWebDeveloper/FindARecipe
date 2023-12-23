function Table ({calories, protein, fat, carb, weight}) {
  return (
    <table>
      <tbody>
        <tr>
          <td>WEIGHT</td>
          <td>{weight.toFixed()} g</td>
        </tr>
        <tr>
          <td>CALORIES</td>
          <td>{calories.toFixed()} kcal</td>
        </tr>
        <tr>
          <td>PROTEIN</td>
          <td>{protein.toFixed()} g</td>
        </tr>
        <tr>
          <td>FAT</td>
          <td>{fat.toFixed()} g</td>
        </tr>
        <tr>
          <td>CARB</td>
          <td>{carb.toFixed()} g</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;