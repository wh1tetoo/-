function generateAdjustedRecipe() {
    var adjustedFlour = parseFloat(document.getElementById('adjustedFlour').value);
    var adjustedTable = document.getElementById('adjustedTable');

    if (!isNaN(adjustedFlour) && adjustedTable) {
        var originalValues = {};

        var ingredients = ['面粉', '水', '酵母', '奶粉', '黄油', '红糖', '白糖', '鸡蛋', '盐', '小苏打', '泡打粉', '巧克力', '坚果', '材料A', '材料B', '材料C'];
        for (var i = 0; i < ingredients.length; i++) {
            var ingredient = ingredients[i];
            originalValues[ingredient] = parseFloat(document.getElementById(`original${ingredient}`).value);
        }

        adjustedTable.innerHTML = `
            <tr>
                <th>原材料</th>
                <th>用量</th>
            </tr>
            <tr>
                <td>面粉</td>
                <td>${adjustedFlour.toFixed(2)}</td>
            </tr>
        `;

        for (var ingredient in originalValues) {
            if (ingredient !== '面粉') {
                var originalValue = originalValues[ingredient];
                var adjustedValue = (adjustedFlour / originalValues['面粉']) * originalValue;
                adjustedTable.innerHTML += `
                    <tr>
                        <td>${ingredient}</td>
                        <td>${adjustedValue.toFixed(2)}</td>
                    </tr>
                `;
            }
        }
    }
}
