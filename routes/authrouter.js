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
        "bkid":"E13",
        "bktitle":"TELL ME YOUR DREAMS",
        "bkauthor":"Sidney Sheldon",
        "bkcategory":"Thriller",
        "bkdescptn":"Tell Me Your Dreams is a 1998 novel by American writer Sidney Sheldon.",
        "bkpages":390,
        "bkprice":250,
        "bkimage":"https://images-eu.ssl-images-amazon.com/images/I/51OAEn0DQeL.jpg"
    },
    {
        "bkid":"E14",
        "bktitle":"AND THEN THERE WERE NONE",
        "bkauthor":"Agatha Christie",
        "bkcategory":"Thriller",
        "bkdescptn":"And Then There Were None is a mystery novel by English writer Agatha Christie, described by her as the most difficult of her books to write.[2] It was first published in the United Kingdom by the Collins Crime Club on 6 November 1939, as Ten Little Niggers,[3] after the minstrel song, which serves as a major plot point.",
        "bkpages":390,
        "bkprice":250,
        "bkimage":"https://images-na.ssl-images-amazon.com/images/I/81B9LhCS2AL.jpg"
    },
    {
        "bkid":"E15",
        "bktitle":"ODYSSEY",
        "bkauthor":"Homer",
        "bkcategory":"Mythology",
        "bkdescptn":"The Odyssey is one of two major ancient Greek epic poems attributed to Homer. It is, in part, a sequel to the Iliad, the other Homeric epic. The Odyssey is fundamental to the modern Western canon; it is the second-oldest extant work of Western literature, while the Iliad is the oldest. Scholars believe the Odyssey was composed near the end of the 8th century BC, somewhere in Ionia, the Greek coastal region of Anatolia.",
        "bkpages":432,
        "bkprice":450,
        "bkimage":"https://images-na.ssl-images-amazon.com/images/I/51UQHGmwJvL.jpg"
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
    console.log(author_array[id].bktitle);
    res.render("authors",{
        ptitle:"Authors",
        nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"}],
        book:author_array[id]
    });
});