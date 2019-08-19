var express = require('express');
const router = express.Router();

module.exports = router;

var author_array = [
    {
        authid:"E01",
        authname:"Amish Tripathi",       
        authgenre:"Mythology",        
        authimage:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Amish_Tripathi_Author.JPG/220px-Amish_Tripathi_Author.JPG"
    },
    {
        authid:"E02",        
        authname:"John Green",
        authgenre:"Romance",      
        authimage:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/John_Green_by_Gage_Skidmore.jpg/220px-John_Green_by_Gage_Skidmore.jpg"
    },
    {
        authid:"E02",        
        authname:"Mohandas K. Gandhi",
        authgenre:"Autobiography",      
        authimage:"https://www.biography.com/.image/t_share/MTIwNjA4NjMzODE4MjIwMDQ0/mahatma-gandhi-9305898-1-402.jpg"
    },
    {
        authid:"E03",        
        authname:"Jane Austen",
        authgenre:"Romance",      
        authimage:"https://cdn.theatlantic.com/assets/media/img/mt/2017/07/2_age/lead_720_405.jpg?mod=1533691895"
    },
    {
        authid:"E04",        
        authname:"Chitra Banerjee",
        authgenre:"Mythology",      
        authimage:"https://i1.wp.com/indianewengland.com/wp-content/uploads/2018/12/Chitra-Banerjee-Divakaruni.jpg?fit=710%2C530&ssl=1"
    },
    {
        authid:"E05",        
        authname:"Nicholas Spark",
        authgenre:"Romance",      
        authimage:"https://www.gannett-cdn.com/presto/2019/06/13/USAT/0b20a00e-9c20-4669-a103-b2acdb06df42-XXX_IMG_NICHOLAS_SPARKS_COLO_1_1_V0FPBHED.JPG?crop=6529,3661,x0,y42&width=3200&height=1680&fit=bounds"
    },
    {
        authid:"E06",        
        authname:"Jamie Mcguire",
        authgenre:"Romance",      
        authimage:"https://i.ytimg.com/vi/qqLec5PzfFc/maxresdefault.jpg"
    },
    {
        authid:"E06",        
        authname:"APJ Abdul Kalam",
        authgenre:"Autobiography",      
        authimage:"https://www.jagranjosh.com/imported/images/E/Articles/facts-about-Kalam.jpg"
    },
    {
        authid:"E07",        
        authname:"Anne Frank",
        authgenre:"Autobiography",      
        authimage:"https://annefrank.freetls.fastly.net/media/filer_public_thumbnails/filer_public/8b/c0/8bc0d1ba-754a-46b5-9ecb-09933e4d323a/anne-frank-hoofdpersonen-header.jpg__1280x1280_q85_crop_subsampling-2_upscale.jpg"
    },    
    {
        authid:"E08",        
        authname:"Pratibha Ray",
        authgenre:"Mythology",      
        authimage:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Pratiba_Ray_2010.JPG/800px-Pratiba_Ray_2010.JPG"
    },  
    {
        authid:"E08",        
        authname:"Pratibha Ray",
        authgenre:"Mythology",      
        authimage:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Pratiba_Ray_2010.JPG/800px-Pratiba_Ray_2010.JPG"
    },  
    {
        authid:"E09",        
        authname:"Agatha Christie",
        authgenre:"Thriller",      
        authimage:"https://agathachristie.imgix.net/archive/website/home/ac-photo.jpg?auto=compress,format&fit=clip&q=65&w=400"
    }, 
    {
        authid:"E09",        
        authname:"Agatha Christie",
        authgenre:"Thriller",      
        authimage:"https://agathachristie.imgix.net/archive/website/home/ac-photo.jpg?auto=compress,format&fit=clip&q=65&w=400"
    }, 
    {
        authid:"E10",        
        authname:"Sidney Sheldon",
        authgenre:"Thriller",      
        authimage:"https://images.gr-assets.com/authors/1209169297p5/9068.jpg"
    }, 
   
    {
        authid:"E11",        
        authname:"Homer",
        authgenre:"Mythology",      
        authimage:"https://images.gr-assets.com/authors/1390672749p5/903.jpg"
    }
];

router.get("/",function(req,res){
    res.render("authors",{
        ptitle:"Authors",
        nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"}],
        authorslist:author_array
    });
});
router.get("/:id",function(req,res){
    var id = req.params.id;
    console.log(id);
    console.log(author_array[id].authname);
    res.render("author",{
        ptitle:"Author",
        nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"}],
        author:author_array[id]
    });
});