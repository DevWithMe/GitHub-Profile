function displayInfo() {
    const username = document.getElementById("username").value;
    var colors = {
        "Mercury":"#ff2b2b","TypeScript":"#2b7489","PureBasic":"#5a6986","Objective-C++":"#6866fb","Self":"#0579aa","edn":"#db5855","NewLisp":"#87AED7","Jupyter Notebook":"#DA5B0B","Rebol":"#358a5b","Frege":"#00cafe","Dart":"#00B4AB","AspectJ":"#a957b0","Shell":"#89e051","Web Ontology Language":"#9cc9dd","xBase":"#403a40","Eiffel":"#946d57","Nix":"#7e7eff","RAML":"#77d9fb","MTML":"#b7e1f4","Racket":"#22228f","Elixir":"#6e4a7e","SAS":"#B34936","Agda":"#315665","wisp":"#7582D1","D":"#ba595e","Kotlin":"#F18E33","Opal":"#f7ede0","Crystal":"#776791","Objective-C":"#438eff","ColdFusion CFC":"#ed2cd6","Oz":"#fab738","Mirah":"#c7a938","Objective-J":"#ff0c5a","Gosu":"#82937f","FreeMarker":"#0050b2","Ruby":"#701516","Component Pascal":"#b0ce4e","Arc":"#aa2afe","Brainfuck":"#2F2530","Nit":"#009917","APL":"#5A8164","Go":"#375eab","Visual Basic":"#945db7","PHP":"#4F5D95","Cirru":"#ccccff","SQF":"#3F3F3F","Glyph":"#e4cc98","Java":"#b07219","MAXScript":"#00a6a6","Scala":"#DC322F","Makefile":"#427819","ColdFusion":"#ed2cd6","Perl":"#0298c3","Lua":"#000080","Vue":"#2c3e50","Verilog":"#b2b7f8","Factor":"#636746","Haxe":"#df7900","Pure Data":"#91de79","Forth":"#341708","Red":"#ee0000","Hy":"#7790B2","Volt":"#1F1F1F","LSL":"#3d9970","eC":"#913960","CoffeeScript":"#244776","HTML":"#e44b23","Lex":"#DBCA00","API Blueprint":"#2ACCA8","Swift":"#ffac45","C":"#555555","AutoHotkey":"#6594b9","Isabelle":"#FEFE00","Metal":"#8f14e9","Clarion":"#db901e","JSONiq":"#40d47e","Boo":"#d4bec1","AutoIt":"#1C3552","Clojure":"#db5855","Rust":"#dea584","Prolog":"#74283c","SourcePawn":"#5c7611","AMPL":"#E6EFBB","FORTRAN":"#4d41b1","ANTLR":"#9DC3FF","Harbour":"#0e60e3","Tcl":"#e4cc98","BlitzMax":"#cd6400","PigLatin":"#fcd7de","Lasso":"#999999","ECL":"#8a1267","VHDL":"#adb2cb","Elm":"#60B5CC","Propeller Spin":"#7fa2a7","X10":"#4B6BEF","IDL":"#a3522f","ATS":"#1ac620","Ada":"#02f88c","Unity3D Asset":"#ab69a1","Nu":"#c9df40","LFE":"#004200","SuperCollider":"#46390b","Oxygene":"#cdd0e3","ASP":"#6a40fd","Assembly":"#6E4C13","Gnuplot":"#f0a9f0","JFlex":"#DBCA00","NetLinx":"#0aa0ff","Turing":"#45f715","Vala":"#fbe5cd","Processing":"#0096D8","Arduino":"#bd79d1","FLUX":"#88ccff","NetLogo":"#ff6375","C Sharp":"#178600","CSS":"#563d7c","Emacs Lisp":"#c065db","Stan":"#b2011d","SaltStack":"#646464","QML":"#44a51c","Pike":"#005390","LOLCODE":"#cc9900","ooc":"#b0b77e","Handlebars":"#01a9d6","J":"#9EEDFF","Mask":"#f97732","EmberScript":"#FFF4F3","TeX":"#3D6117","Nemerle":"#3d3c6e","KRL":"#28431f","Ren'Py":"#ff7f7f","Unified Parallel C":"#4e3617","Golo":"#88562A","Fancy":"#7b9db4","OCaml":"#3be133","Shen":"#120F14","Pascal":"#b0ce4e","F#":"#b845fc","Puppet":"#302B6D","ActionScript":"#882B0F","Diff":"#88dddd","Ragel in Ruby Host":"#9d5200","Fantom":"#dbded5","Zephir":"#118f9e","Click":"#E4E6F3","Smalltalk":"#596706","DM":"#447265","Ioke":"#078193","PogoScript":"#d80074","LiveScript":"#499886","JavaScript":"#f1e05a","VimL":"#199f4b","PureScript":"#1D222D","ABAP":"#E8274B","Matlab":"#bb92ac","Slash":"#007eff","R":"#198ce7","Erlang":"#B83998","Pan":"#cc0000","LookML":"#652B81","Eagle":"#814C05","Scheme":"#1e4aec","PLSQL":"#dad8d8","Python":"#3572A5","Max":"#c4a79c","Common Lisp":"#3fb68b","Latte":"#A8FF97","XQuery":"#5232e7","Omgrofl":"#cabbff","XC":"#99DA07","Nimrod":"#37775b","SystemVerilog":"#DAE1C2","Chapel":"#8dc63f","Groovy":"#e69f56","Dylan":"#6c616e","E":"#ccce35","Parrot":"#f3ca0a","Grammatical Framework":"#79aa7a","Game Maker Language":"#8fb200","Papyrus":"#6600cc","NetLinx+ERB":"#747faa","Clean":"#3F85AF","Alloy":"#64C800","Squirrel":"#800000","PAWN":"#dbb284","UnrealScript":"#a54c4d","Standard ML":"#dc566d","Slim":"#ff8f77","Perl6":"#0000fb","Julia":"#a270ba","Haskell":"#29b544","NCL":"#28431f","Io":"#a9188d","Rouge":"#cc0088","cpp":"#f34b7d","AGS Script":"#B9D9FF","Dogescript":"#cca760","nesC":"#94B0C7", "other": "#abcdef"
    }

    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        } : null;
    }

    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        if (data["login"] === undefined) {
            document.getElementById("content").innerHTML = "<h1>No Such user</h1>"
        }

        document.getElementById("username").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M4.75 2.37a6.5 6.5 0 006.5 11.26.75.75 0 01.75 1.298 8 8 0 113.994-7.273.754.754 0 01.006.095v1.5a2.75 2.75 0 01-5.072 1.475A4 4 0 1112 8v1.25a1.25 1.25 0 002.5 0V7.867a6.5 6.5 0 00-9.75-5.496V2.37zM10.5 8a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z"></path></svg>${data["login"]}`

        document.getElementById("profile").setAttribute("src", data["avatar_url"]);
        document.getElementById("username").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M4.75 2.37a6.5 6.5 0 006.5 11.26.75.75 0 01.75 1.298 8 8 0 113.994-7.273.754.754 0 01.006.095v1.5a2.75 2.75 0 01-5.072 1.475A4 4 0 1112 8v1.25a1.25 1.25 0 002.5 0V7.867a6.5 6.5 0 00-9.75-5.496V2.37zM10.5 8a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z"></path></svg>${data["login"]}`;

        if (data["location"] !== null) {
            document.getElementById("location").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path><path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path></svg>${data["location"]}`
            document.getElementById("location").setAttribute("href", `https://www.google.com/maps/place/${data["location"]}`)
        };

        if (data["blog"] !== null) {
            document.getElementById("blog").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>${data["blog"]}`
            document.getElementById("blog").setAttribute("href", data["blog"])
        };

        document.getElementById("bio").innerText = data["bio"];
        document.getElementById("login").innerText = `@${data["login"]}`

    });

    fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(data => {
        var repoLangs = [];
        var repoLangsCount = {};

        if (data["message"] === "Not Found") {
            document.getElementById("main").innerHTML = "<h1>No such user</h1>"
        }

        for (let i in data) {
            var repoInfo = ""
            var LI = document.createElement("LI");

            if (data[i]["language"] === null) var lang = "other"
            else var lang = data[i]["language"]

            if (data[i]["fork"] === true) repoInfo += `<span class="fork">${data[i]["name"]} - ${lang} + (forked)</span>`
            else repoInfo += `<span>${data[i]["name"]} - ${lang} + </span>`

            if (data[i]["language"] === null) repoLangs.push("other");
            else repoLangs.push(data[i]["language"]);

            if (data[i]["language"] === null) var lang = null;
            else var lang = data[i]["language"];

            if (lang === null && repoLangsCount["other"] === undefined) repoLangsCount["other"] = 1
            else if (lang === null) repoLangsCount["other"]++;
            else if (lang !== null && repoLangsCount[lang] === undefined) repoLangsCount[lang] = 1
            else repoLangsCount[lang]++;

            if (repoInfo.includes("fork")) LI.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>${repoInfo}`
            else LI.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>${repoInfo}`

            document.getElementById("main").appendChild(LI);
        }

        var colorArr = [];
        for (let i=0; i<Object.keys(repoLangsCount).length; i++) {
            try {
                var string = `rgba(${hexToRgb(colors[Object.keys(repoLangsCount)[i]]).r}, ${hexToRgb(colors[Object.keys(repoLangsCount)[i]]).g}, ${hexToRgb(colors[Object.keys(repoLangsCount)[i]]).b}, 5)`
            } catch (err) {
                var string = `rgba(100, 100, 100, 5)`
            }
            colorArr.push(string);
        };

        var ctx = document.getElementById("chart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: repoLangs.filter(unique),
                datasets: [{
                    label: '# of Repo based on Language',
                    data: Object.values(repoLangsCount),
                    backgroundColor: colorArr,
                    borderColor: colorArr,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    })
}