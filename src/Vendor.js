
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import { ImageGrid, VideoGrid} from "react-fb-image-video-grid";
import NavBardSide  from './ui-components/NavBarSide'
import SideBar from './ui-components/SideBar';
import { API, Auth, Storage } from "aws-amplify";
import { display } from '@mui/system';


const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",

  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",

  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",

  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",

  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",

  },
  {
    original: "https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4",
  }
];

const videos = [
  {
    src: "https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4",
  },
  {
    src: "https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4",
  }
]


export default function Vendor() {
  const [categorySelected, setCategorySelected] = useState(1);
  const [params, setSearchParams] = useSearchParams();
  const [image, setImage] = useState(null);
  const [allImages, setAllImages] = useState([]);
  const pic = (c, i) => (
    <img style={{ objectFit: "contain" }} src={c.uri} alt={i} key={Math.random(i)} />
  );

  const getImagesUri = async (data) => {
    let count, foo;
    let uriArray = [];
    for (count = 0; count < data.length; count++) {
      foo = data[count]["key"];
      // Given the key, the get method below returns the uri of every image
      await Storage.get(foo)
        .then((bar) => {
          // shorten the uri for fast parsing
          const shortUri = bar.substr(0, 102);
          uriArray.push(bar);
        })
        .catch((err) => console.log(err));
      // add an uri key to the data array of objects
      data[count]["uri"] = uriArray[count];
    }
  };

  const fetchImages = async (path, access) => {
    await Storage.list(path, { level: "public", pageSize: 30 })
      .then(async (res) => {
        // Get rid of the first item in the returned array which is the folder itself !!! (blame AWS )
        res = res.results.slice(1);
        // Clone the original array of data to avoid mutating the original data
        const resModified = [].concat(res);

        // Sort the images by descending publication date

        resModified.sort((a, b) =>
          b["lastModified"].toString().localeCompare(a["lastModified"])
        );
        // Add the uri of every image stored in S3
        await getImagesUri(resModified); // (data)
        // Store the up to date data in the allImages array
        setAllImages(resModified);

        // console.log('allImages: ', this.state.allImages)
      })
      .catch((err) => console.log("error fetching 2" + err));
  };

  useEffect(() => {
    (async function () {
      const userId = params.get('userId');
      const folder = categorySelected === 1 ? ""+ userId + "/images/" : ""+ userId + "/videos/"
      await fetchImages(folder, { level: "public" }); 
    })();
  }, [categorySelected]);

  const videocomp = (c, i) => (
    <video width="400" controls autoPlay={true} muted playsInline key={Math.random(i)}>
    <source src={c.uri} type="video/mp4" muted/>
     </video>
  );
  return (
    <div className='vendor-container' style={{display: 'flex'}}>
    <SideBar onCategorySelected={(c) => {
      setAllImages([]);
      setCategorySelected(c)}
    }/>
    {categorySelected === 1 && allImages.length &&  
    <ImageGrid>
      {allImages
        .map((a) => pic(a))}
    </ImageGrid>
    }
   {categorySelected === 2 &&  
   <div className='video-container'>
  {
  allImages.map((a) => videocomp(a))}
  
   
</div>

      

    }


   
  </div>
  )
}
