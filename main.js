let values = [];

  function generate_graph() {
    document.getElementById("elements_val_id").innerText = "";
    document.getElementById("graph_wrap_id").style.borderColor = "grey";

    document.getElementById("vis_btn_id").disabled = false;
    document.getElementById("vis_btn_id").style.cursor = "default";

    for (let i = 0; i < 10; i++) {
      values[i] = Math.floor(Math.random() * 300) + 1;
      document.getElementById("graph_bar" + i).style.height = values[i] + "px";
      let old_el_val = document.getElementById("elements_val_id").innerText;
      document.getElementById("elements_val_id").innerText = old_el_val + " " + values[i];
    }
    /*--------------------------------------*/
    /*------------------------------------------------*/
  }

  //BUBBLE SORTING
  async function visualize_clicked() {
    if (document.getElementById("sort_select_id").value == "") {
      alert("select an algorithm");
    }
    else if (document.getElementById("sort_select_id").value == "bubble") {
      let temp = 0;
      for (let j = 0; j < values.length; j++) {
        document.getElementById("gen_btn_id").disabled = true;
        document.getElementById("gen_btn_id").style.cursor = "not-allowed";

        document.getElementById("vis_btn_id").disabled = true;
        document.getElementById("vis_btn_id").style.cursor = "not-allowed";

        document.getElementById("graph_bar" + j).style.backgroundColor = "red";
        for (let k = j + 1; k < values.length; k++) {
          document.getElementById("graph_bar" + k).style.backgroundColor = "pink";
          if (values[j] > values[k]) {

            temp = values[j];
            values[j] = values[k];
            values[k] = temp;

            document.getElementById("graph_bar" + j).style.height = values[j] + "px";
            document.getElementById("graph_bar" + j).style.display = "block";

            document.getElementById("graph_bar" + k).style.height = values[k] + "px";
            document.getElementById("graph_bar" + k).style.display = "block";

          }
          await new Promise(r => setTimeout(r, 500));
          document.getElementById("graph_bar" + k).style.backgroundColor = "rgb(137, 228, 246)";
        }
        document.getElementById("graph_bar" + j).style.backgroundColor = "rgb(137, 228, 246)";
      }
      document.getElementById("gen_btn_id").disabled = false;
      document.getElementById("gen_btn_id").style.cursor = "default";

      alert("Bubble Sorting Completed Successfully.")
    }
  }