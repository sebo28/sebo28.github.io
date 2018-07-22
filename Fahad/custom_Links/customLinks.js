//Varaibles
/* version number: changing this number
will update all version centric variables */
var versionnum = "2.3.13"

//previous version link
var preversion = "https://sourceforge.net/projects/natron/files/"

// Git hub Main Repo Page Link
var mainRepoLink = "https://github.com/NatronGitHub/Natron";
// Community plugin links
var communityplug = "https://github.com/NatronGitHub/natron-plugins";


// Social Links
var forumLink = "https://discuss.pixls.us/c/software/natron";
var fblink = "https://www.facebook.com/groups/NatronNation";
var twitterlink = "https://twitter.com/natronvfx";
var googleLink = "https://plus.google.com/u/0/communities/116548935195599437911";


// Documentation links
var docuLink = "http://natron.readthedocs.io";
var docuGitLink = "https://github.com/NatronGitHub/Natron/wiki";



//////version centric variables:changelog and download etc. START////
///NO NEED TO TOUCH USUALLY AS IT WORKS WITH VERSION NUMBER/////
    var chnglognum = "https://github.com/NatronGitHub/Natron/blob/"+versionnum+"/CHANGELOG.md"
    // Windows Downlaod Varaibles Start
        var winDld = "https://downloads.natron.fr/Windows/releases/64bit/files/Natron-"+versionnum+"-Windows-x86_64bit-setup.exe"
        var winOnilineDld = "https://downloads.natron.fr/Windows/releases/64bit/files/Natron-Windows-x86_64bit-online-release-setup.exe"
        var winPoratbleDld = "https://downloads.natron.fr/Windows/releases/64bit/files/Natron-"+versionnum+"-Windows-x86_64bit-no-installer.zip"
    // Windows Downlaod Varaibles end

    // Mac Downlaod Varaibles start
        var macDld = "https://downloads.natron.fr/Mac/releases/Natron-"+versionnum+".dmg"
    // Mac Downlaod Varaibles end

    // linux Downlaod Varaibles Start
        var linDld = "https://downloads.natron.fr/Linux/releases/64bit/files/Natron-"+versionnum+"-Linux-x86_64bit.tgz"
        var linOnilineDld = "https://downloads.natron.fr/Linux/releases/64bit/files/Natron-Linux-x86_64bit-online-install-release.tgz"
        var linPoratbleDld = "https://downloads.natron.fr/Linux/releases/64bit/files/Natron-"+versionnum+"-Linux-x86_64bit-portable.tar.xz"
        var linRpmDld = "https://downloads.natron.fr/Linux/releases/64bit/files/Natron-"+versionnum+".x86_64.rpm"
        var linDbnDld = "https://downloads.natron.fr/Linux/releases/64bit/files/natron_"+versionnum+"_amd64.deb"
    // Linux Downlaod Varaibles end

///NO NEED TO TOUCH USUALLY AS IT WORKS WITH VERSION NUMBER/////
//////version centric variables:changelog and download etc. END/////



/*#######DANGER ZONE. EDIT ONLY IF NECESSARY#######

Each links should pass with an "UNIQUE_ID". You can use above variables in new created link
or create new varaibles like above. For example see: "communityplug" ID below

/######DANGER ZONE. EDIT ONLY IF NECESSARY########*/

//version formatting

document.getElementById("versionnum").innerHTML= "Current Version "+versionnum+"&nbsp";

// version centric links establised by ID

document.getElementById("chnglognum").href= chnglognum; //changelog
document.getElementById("preversion").href= preversion; //previous version

//windows downloads start//
    document.getElementById("winDld").href= winDld;
    document.getElementById("winDld").innerHTML= "Download Natron "+versionnum+ "&nbsp;"+'<i class="fa fa-windows"></i>';
    document.getElementById("winOnilineDld").href= winOnilineDld;
    document.getElementById("winPoratbleDld").href= winPoratbleDld;
//windows downloads end//

//Mac downloads start//
    document.getElementById("macDld").href= macDld;
    document.getElementById("macDld").innerHTML= "Download Natron "+versionnum+ "&nbsp"+'<i class="fa fa-apple"></i>';
//Mac downloads end//

//Linux downloads start//
    document.getElementById("linDld").href= linDld;
    document.getElementById("linDld").innerHTML= "Download Natron "+versionnum+ "&nbsp"+'<i class="fa fa-linux"></i>';
    document.getElementById("linOnilineDld").href= linOnilineDld;
    document.getElementById("linPoratbleDld").href= linPoratbleDld;
    document.getElementById("linRpmDld").href= linRpmDld;
    document.getElementById("linDbnDld").href= linDbnDld;
//Linux downloads end//




// Repo links established by ID
document.getElementById("mainRepoLink").href= mainRepoLink;
document.getElementById("communityplug").href = communityplug;
document.getElementById("communityplug2").href = communityplug;
document.getElementById("communityplug3").href = communityplug;

// Social links established by ID
document.getElementById("forumLink").href = forumLink;
document.getElementById("fblink").href = fblink;
document.getElementById("fblink").innerHTML = '<i class="fa fa-facebook"></i>';
document.getElementById("twitterlink").href = twitterlink;
document.getElementById("twitterlink").innerHTML = '<i class="fa fa-twitter"></i>';
document.getElementById("googleLink").href = googleLink;
document.getElementById("googleLink").innerHTML = '<i class="fa fa-google"></i>';
document.getElementById("docuLink").href =  docuLink;
document.getElementById("docuGitLink").href = docuGitLink;
