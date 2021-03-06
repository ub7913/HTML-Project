var jsonData = [{ "id": 1, "first_name": "Wells", "last_name": "Bingley", "email": "wbingley0@independent.co.uk", "gender": "Male" },
        { "id": 2, "first_name": "Gwendolen", "last_name": "Swinnard", "email": "gswinnard1@google.com", "gender": "Female" },
        { "id": 3, "first_name": "Devland", "last_name": "Burgwyn", "email": "dburgwyn2@booking.com", "gender": "Male" },
        { "id": 4, "first_name": "Clevie", "last_name": "Hertwell", "email": "chertwell3@wired.com", "gender": "Male" },
        { "id": 5, "first_name": "Christel", "last_name": "Bachelor", "email": "cbachelor4@aol.com", "gender": "Female" },
        { "id": 6, "first_name": "Alma", "last_name": "Bangley", "email": "abangley5@wp.com", "gender": "Female" },
        { "id": 7, "first_name": "Farly", "last_name": "Delagnes", "email": "fdelagnes6@diigo.com", "gender": "Male" },
        { "id": 8, "first_name": "Aurelea", "last_name": "Corston", "email": "acorston7@hatena.ne.jp", "gender": "Female" },
        { "id": 9, "first_name": "Zora", "last_name": "Doddemeade", "email": "zdoddemeade8@arizona.edu", "gender": "Female" },
        { "id": 10, "first_name": "Maire", "last_name": "Torel", "email": "mtorel9@amazonaws.com", "gender": "Female" },
        { "id": 11, "first_name": "Reinhard", "last_name": "Siviter", "email": "rsivitera@home.pl", "gender": "Male" },
        { "id": 12, "first_name": "Kurt", "last_name": "Domokos", "email": "kdomokosb@europa.eu", "gender": "Male" },
        { "id": 13, "first_name": "Kingsley", "last_name": "St. Aubyn", "email": "kstaubync@usatoday.com", "gender": "Male" },
        { "id": 14, "first_name": "Rawley", "last_name": "McKoy", "email": "rmckoyd@bizjournals.com", "gender": "Male" },
        { "id": 15, "first_name": "Melantha", "last_name": "McGrill", "email": "mmcgrille@networksolutions.com", "gender": "Female" }];

var titles = ['id', 'first_name', 'last_name', 'email', 'gender'];

$(document).ready(function() {
    //타이틀 영역
    var $table = $('<table />').attr('border', '1');
    var $tr = $('<tr />');
    titles.forEach(function(o){
        $tr.append($('<th />').text(o));
    });
    $table.append($tr);
    //데이터 영역
    jsonData.forEach(function(o) {
        console.log(o);
        var $tr = $('<tr />').mouseenter(mouseenterFunc)
                             .mouseout(mouseoutFunc);
        titles.forEach(function(f) {
            console.log(f);
            $tr.append($('<td />').text(o[f]));
        });
        var $btn = $('<td />').html('<button>Click</button>').click(btnFunc);
        $tr.append($btn);
        $table.append($tr);
    });
    $('#show').append($table);
});

function mouseenterFunc() {
    $(this).css('background', 'yellow');
}

function mouseoutFunc() {
    $(this).css('background', '');
}

function btnFunc() {
    $(this).parent().hide();
}