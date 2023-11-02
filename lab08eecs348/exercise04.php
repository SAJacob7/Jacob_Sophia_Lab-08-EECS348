<?php
echo '<a href = "practice4.html">Practice 4 Page</a>';
$size = $_POST['size'];
if($size)
{
    echo '<table>';
    echo '<table border = 1>';
    echo'<tr>';
    echo'<td>'; // Makes an empty row col entry so that the table can be aligned.
    echo'</td>';
    //echo'<tr>';
    for($i=1; $i<=$size; $i++) {
        echo"<td>$i</td>"; // Adds the row ordering.
    }
    echo '</tr>';
    for ($i=1; $i<=$size; $i++)
    {
        echo '<tr>';
        echo "<td>$i</td>"; // Adds the column ordering.

        for($j=1; $j<=$size; $j++) {

            $mul = $i * $j; // Multiplies the row and col to get multiplication.
            //echo "$i * $j = $mul<br>";
            echo "<td>$mul</td>"; // Adds the value to its row and col.

        }
        echo '</tr>'; // Ends the row.
    }
    echo '</table>';
}


?>
