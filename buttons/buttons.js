function buttons() {
        let buttons = []
        for ( let i = 1; i <= 20; i++ ) {
                buttons[i] = document.createElement("button");
                buttons[i].id = "button" + i;
                buttons[i].className = "button";
                buttons[i].innerHTML = i;
                document.getElementById("container").appendChild(buttons[i])

                // buttons[i].onclick = al(i);
                buttons[i].addEventListener("click", function() {alert(i)});
        }

        function al(a) {
                alert(a)
        }
}