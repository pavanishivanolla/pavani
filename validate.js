function validateform()
{
    var education = document.getElementById("education").value.trim();
    var skills = document.getElementById("skills").value.trim();
    var projects = document.getElementById("projects").value.trim();

    if(education == "" || skills == "" || projects == "")
    {
        alert("Please fill all the fields");
        return false;
    }

    if(education.length < 5)
    {
        alert("Enter valid education details");
        return false;
    }

    if(skills.length < 3)
    {
        alert("Enter valid skills");
        return false;
    }