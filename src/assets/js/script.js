


// $(document).ready(function () {
//     $("strong").hide();
//     $('#verificar-email').click(function () {
//         //desabilitando o submit do form
//         $("form").submit(function () { return false; });
//         //atribuindo o valor do campo
//         const sEmail = $("#email").val();
//         // filtros
//         const emailFilter = /^.+@.+\..{2,}$/;
//         const illegalChars = /[\(\)\<\>\,\;\:\\\/\"\[\]]/
//         // condição
//         if (!(emailFilter.test(sEmail)) || sEmail.match(illegalChars)) {
//             $("strong").show().removeClass("ok").addClass("erro")
//                 .text('Por favor, informe um email válido.');
//         } else {
//             $("strong").show().addClass("ok").removeClass("erro")
//                 .text('E-mail enviado com sucesso.');
//         }
//     });
//     $('#email').focus(function () {
//         $("p.erro").hide();
//     });
// });



// fazendo a validação de dados via jquery

// $(document).ready(function(){
    
//     $(".btn").click(function(){
        
//         // //pegar os dados dos campos
        
//         let nome = $("#nome").val();
//         let email = $("#email").val();
//         let senha = $("#senha").val();
//         console.log({nome, email: email, senha})

//         if(nome?.trim() == "" || email == "" || senha == ""){
//             $(".mensagem").text("Favor preencher todos os campos!");

//         } else {
//             $(".mensagem").addClass("ok").text("Dados enviado com sucesso.");
//         }
//     });
// });
