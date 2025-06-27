$(document).ready(function () {
    $("#multiplicationForm").validate({
        rules: {
            startX: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            endX: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            startY: {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            endY: {
                required: true,
                number: true,
                min: -50,
                max: 50
            }
        },
        messages: {
            startX: "Enter a number between -50 and 50.",
            endX: "Enter a number between -50 and 50.",
            startY: "Enter a number between -50 and 50.",
            endY: "Enter a number between -50 and 50."
        },
        submitHandler: function (form) {
            const startX = parseInt($("#startX").val());
            const endX = parseInt($("#endX").val());
            const startY = parseInt($("#startY").val());
            const endY = parseInt($("#endY").val());
            const errorDiv = $("#errorMessage");
            const tableContainer = $("#tableContainer");

            errorDiv.text("");
            tableContainer.html("");

            if (startX > endX || startY > endY) {
                errorDiv.text("Start values must be less than or equal to end values.");
                return;
            }

            let table = "<table><thead><tr><th></th>";
            for (let x = startX; x <= endX; x++) {
                table += `<th>${x}</th>`;
            }
            table += "</tr></thead><tbody>";

            for (let y = startY; y <= endY; y++) {
                table += `<tr><th>${y}</th>`;
                for (let x = startX; x <= endX; x++) {
                    table += `<td>${x * y}</td>`;
                }
                table += "</tr>";
            }

            table += "</tbody></table>";
            tableContainer.html(table);
        }
    });
});