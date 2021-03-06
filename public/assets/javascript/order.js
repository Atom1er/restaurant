$(document).ready(function () {
    var order = [];
    var plat_dibi = ["Dibi"];
    var plat_riz = ["Riz"];
    var drinks = ["Drinks"];
    var poisson = ["Poisson"];
    var To = ["To"];

    function state(state, menu) {

        if (state === 'hide') {
            menu.css('display', 'block');
            menu.attr('data-state', 'showed');
            $('#place-order-btn').css('display', 'block');
        } else if (state === 'showed') {
            menu.css('display', 'none');
            menu.attr('data-state', 'hide');
        };
    }


    $('.dibi').on('click', function () {
        var menuList = $("#dibi-side");
        var status = $('#dibi-side').attr('data-state');
        state(status, menuList);
        $("#footer").css('display', 'none');
    });

    $('.rice').on('click', function () {
        var menuList = $("#rice-side");
        var status = $('#rice-side').attr('data-state');
        state(status, menuList);
        $("#footer").css('display', 'none');
    });
    $('.drinks').on('click', function () {
        var menuList = $("#drinks-side");
        var status = $('#drinks-side').attr('data-state');
        state(status, menuList);
        $("#footer").css('display', 'none');
    });


    $('.poisson').on('click', function () {
        var menuList = $("#poisson-side");
        var status = $('#poisson-side').attr('data-state');
        state(status, menuList);
        $("#footer").css('display', 'none');
    });

    $('.To').on('click', function () {
        var menuList = $("#To-side");
        var status = $('#To-side').attr('data-state');
        state(status, menuList);
        $("#footer").css('display', 'none');
    });



    $(".side-element").on('click', function () {
        var value = $(this).siblings('input').attr('value');
        var selected = $(this).siblings('input').attr('data-selected');
        var plat_name = $(this).parent().parent().prev().prev().attr('value');

        console.log('Plat Name: ' + plat_name);

        if (selected === 'false') {
            if (plat_name === 'Dibi') {
                plat_dibi.push(value);
                console.log(plat_dibi);
            } else if (plat_name === 'Rice') {
                plat_riz.push(value);
                console.log('After Pushing: ' + plat_riz);
            } else if(plat_name === 'drinks'){
                drinks.push(value);
                console.log('Drinks After Pushing '+drinks);
            }else if(plat_name === 'poisson'){
                poisson.push(value);
                console.log('Poisson After Pushing '+poisson);
            }else if(plat_name === 'To'){
                To.push(value);
                console.log('Poisson After Pushing '+To);
            }

            $(this).siblings('input').attr('data-selected', 'true');


        } else if (selected === 'true') {
            // console.log('selected: ' + selected);
            if (plat_name === 'Dibi') {
                for (var i = 0; i < plat_dibi.length; i++) {
                    if (value === plat_dibi[i]) {
                        plat_dibi.splice(i, 1);
                        console.log('After slicing DIBI: ' + plat_dibi);
                    }
                }
                $(this).siblings('input').attr('data-selected', 'false');
            } else if (plat_name === 'Riz') {
                for (var i = 0; i < plat_riz.length; i++) {
                    if (value === plat_riz[i]) {
                        plat_riz.splice(i, 1);
                        console.log('After slicing RIZ: ' + plat_riz);
                    }
                }
                $(this).siblings('input').attr('data-selected', 'false');
            }else if (plat_name === 'drinks') {
                for (var i = 0; i < drinks.length; i++) {
                    if (value === drinks[i]) {
                        drinks.splice(i, 1);
                        console.log('After slicing RIZ: ' + drinks);
                    }
                }
                $(this).siblings('input').attr('data-selected', 'false');
            }else if (plat_name === 'poisson') {
                for (var i = 0; i < poisson.length; i++) {
                    if (value === poisson[i]) {
                        poisson.splice(i, 1);
                        console.log('After slicing Poisson: ' + poisson);
                    }
                }
                $(this).siblings('input').attr('data-selected', 'false');
            }else if (plat_name === 'To') {
                for (var i = 0; i < To.length; i++) {
                    if (value === To[i]) {
                        To.splice(i, 1);
                        console.log('After slicing Poisson: ' + To);
                    }
                }
                $(this).siblings('input').attr('data-selected', 'false');
            }
        }
    });



    $("#place-order-btn").on('click', function () {
        var dibi_valid = true;
        var riz_valid = true;
        var drink = true;
        var poisson_valide = true;
        var To_valide = true;
        var name = $("#name").val();
        var tel = $("#tel").val();
        var client = {
            name: name,
            tel: tel
        };
        console.log(client);

        if (plat_dibi.length > 1) {
            var meal0 = plat_dibi[0];
            plat_dibi.shift();
            let side0 = "- ";
            plat_dibi.forEach(element => {
                side0 += element + " - "
            });
            console.log(side0);
            var dibi_order = {
                meal: meal0,
                side: side0
            }
            dibi_valid = true;
        } else{
            dibi_valid = false;
        }


        if (plat_riz.length > 1) {
            var meal1 = plat_riz[0];
            plat_riz.shift();
            var side1 = "- ";
            plat_riz.forEach(element => {
                side1 += element + " - "
            });
            var riz_order = {
                meal: meal1,
                side: side1
            }
            riz_valid = true;
        } else{
            riz_valid = false;
        } 

        if (drinks.length > 1) {
            var meal1 = drinks[0];
            drinks.shift();
            var side1 = "- ";
            drinks.forEach(element => {
                side1 += element + " - "
            });
            var drink_order = {
                meal: meal1,
                side: side1
            }
            drink = true;
        } else{
            drink = false;
        } 


        if (poisson.length > 1) {
            var meal4 = poisson[0];
            poisson.shift();
            var side1 = "- ";
            console.log(poisson);
            poisson.forEach(element => {
                side1 += element + " - "
            });
            var poisson_order = {
                meal: meal4,
                side: side1
            }
            poisson_valide = true;
        } else{
            poisson_valide = false;
        }

        if (To.length > 1) {
            var meal4 = To[0];
            To.shift();
            var side1 = "- ";
            console.log(To);
            To.forEach(element => {
                side1 += element + " - "
            });
            var To_order = {
                meal: meal4,
                side: side1
            }
            To_valide = true;
        } else{
            To_valide = false;
        }

        if (!dibi_valid && !riz_valid && !drink && !poisson_valide && !To_valide) {
            alert('Please select an accompaniments!')
        }else{
    
            var item = {
                Client : client,
                order_1 : dibi_order,
                order_2 : riz_order,
                order_3: drink_order,
                order_4: poisson_order,
                order_5: To_order
            }
            console.log(item);
            orderPlace(item);
        }

    });

    function orderPlace(elem) {

        $.ajax({
            method: "POST",
            url: "/api/newOrder",
            data: elem
          })
            .done(function( msg ) {
              alert(msg);
              window.location.href = "/";
            });
    }
});