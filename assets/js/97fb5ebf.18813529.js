"use strict";(self.webpackChunkytdlp_docs=self.webpackChunkytdlp_docs||[]).push([[5553],{8206:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var t=o(4848),d=o(8453);const l={sidebar_position:2},r="Examples of Embedding yt-dlp",i={id:"Embedding yt-dlp/examples-of-embedding",title:"Examples of Embedding yt-dlp",description:"This page provides various examples of how to embed yt-dlp functionality in your Python scripts. These examples cover a range of common use cases and demonstrate the flexibility of yt-dlp's API.",source:"@site/docs/Embedding yt-dlp/examples-of-embedding.md",sourceDirName:"Embedding yt-dlp",slug:"/Embedding yt-dlp/examples-of-embedding",permalink:"/docs/Embedding yt-dlp/examples-of-embedding",draft:!1,unlisted:!1,editUrl:"https://github.com/enough-jainil/yt-dlp-doc/docs/Embedding yt-dlp/examples-of-embedding.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Using yt-dlp in Python Scripts",permalink:"/docs/Embedding yt-dlp/using-yt-dlp-in-python-scripts"},next:{title:"Troubleshooting",permalink:"/docs/category/troubleshooting"}},s={},a=[{value:"1. Basic Video Download",id:"1-basic-video-download",level:2},{value:"2. Download Audio Only",id:"2-download-audio-only",level:2},{value:"3. Extract Video Information",id:"3-extract-video-information",level:2},{value:"4. Download Playlist",id:"4-download-playlist",level:2},{value:"5. Custom Output Template",id:"5-custom-output-template",level:2},{value:"6. Download with Progress Callback",id:"6-download-with-progress-callback",level:2},{value:"7. Error Handling",id:"7-error-handling",level:2},{value:"8. Batch Download from File",id:"8-batch-download-from-file",level:2},{value:"9. Download with Authentication",id:"9-download-with-authentication",level:2},{value:"10. Custom Format Selection",id:"10-custom-format-selection",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"examples-of-embedding-yt-dlp",children:"Examples of Embedding yt-dlp"})}),"\n",(0,t.jsx)(n.p,{children:"This page provides various examples of how to embed yt-dlp functionality in your Python scripts. These examples cover a range of common use cases and demonstrate the flexibility of yt-dlp's API."}),"\n",(0,t.jsx)(n.h2,{id:"1-basic-video-download",children:"1. Basic Video Download"}),"\n",(0,t.jsx)(n.p,{children:"Download a single video with default options:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import yt_dlp\r\n\r\ndef download_video(url):\r\n    ydl_opts = {}\r\n    with yt_dlp.YoutubeDL(ydl_opts) as ydl:\r\n        ydl.download([url])\r\n\r\n# Usage\r\ndownload_video('https://www.youtube.com/watch?v=dQw4w9WgXcQ')\n"})}),"\n",(0,t.jsx)(n.h2,{id:"2-download-audio-only",children:"2. Download Audio Only"}),"\n",(0,t.jsx)(n.p,{children:"Extract audio from a video and save it as an MP3:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import yt_dlp\r\n\r\nydl_opts = {\r\n    'format': 'bestaudio/best',\r\n    'postprocessors': [{\r\n        'key': 'FFmpegExtractAudio',\r\n        'preferredcodec': 'mp3',\r\n        'preferredquality': '192',\r\n    }],\r\n    'outtmpl': '%(title)s.%(ext)s'\r\n}\r\n\r\nwith yt_dlp.YoutubeDL(ydl_opts) as ydl:\r\n    ydl.download(['https://www.youtube.com/watch?v=dQw4w9WgXcQ'])\n"})}),"\n",(0,t.jsx)(n.h2,{id:"3-extract-video-information",children:"3. Extract Video Information"}),"\n",(0,t.jsx)(n.p,{children:"Get metadata about a video without downloading it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import yt_dlp\r\n\r\ndef get_video_info(url):\r\n    ydl_opts = {}\r\n    with yt_dlp.YoutubeDL(ydl_opts) as ydl:\r\n        info = ydl.extract_info(url, download=False)\r\n    return info\r\n\r\n# Usage\r\ninfo = get_video_info('https://www.youtube.com/watch?v=dQw4w9WgXcQ')\r\nprint(f\"Title: {info['title']}\")\r\nprint(f\"Duration: {info['duration']} seconds\")\n"})}),"\n",(0,t.jsx)(n.h2,{id:"4-download-playlist",children:"4. Download Playlist"}),"\n",(0,t.jsx)(n.p,{children:"Download all videos from a playlist:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import yt_dlp\r\n\r\ndef download_playlist(url):\r\n    ydl_opts = {\r\n        'outtmpl': '%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s',\r\n    }\r\n    with yt_dlp.YoutubeDL(ydl_opts) as ydl:\r\n        ydl.download([url])\r\n\r\n# Usage\r\ndownload_playlist('https://www.youtube.com/playlist?list=PLrEnWoR732-BHrPp_Pm8_VleD68f9s14-')\n"})}),"\n",(0,t.jsx)(n.h2,{id:"5-custom-output-template",children:"5. Custom Output Template"}),"\n",(0,t.jsx)(n.p,{children:"Use a custom output template to organize downloads:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import yt_dlp\r\n\r\nydl_opts = {\r\n    'outtmpl': '%(uploader)s/%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s'\r\n}\r\n\r\nwith yt_dlp.YoutubeDL(ydl_opts) as ydl:\r\n    ydl.download(['https://www.youtube.com/watch?v=dQw4w9WgXcQ'])\n"})}),"\n",(0,t.jsx)(n.h2,{id:"6-download-with-progress-callback",children:"6. Download with Progress Callback"}),"\n",(0,t.jsx)(n.p,{children:"Implement a progress callback to track download progress:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import yt_dlp\r\n\r\ndef my_hook(d):\r\n    if d['status'] == 'finished':\r\n        print('Done downloading, now converting ...')\r\n    elif d['status'] == 'downloading':\r\n        print(f\"Downloading: {d['filename']} - {d['_percent_str']} complete\")\r\n\r\nydl_opts = {\r\n    'progress_hooks': [my_hook],\r\n}\r\n\r\nwith yt_dlp.YoutubeDL(ydl_opts) as ydl:\r\n    ydl.download(['https://www.youtube.com/watch?v=dQw4w9WgXcQ'])\n"})}),"\n",(0,t.jsx)(n.h2,{id:"7-error-handling",children:"7. Error Handling"}),"\n",(0,t.jsx)(n.p,{children:"Implement error handling for robustness:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import yt_dlp\r\nfrom yt_dlp.utils import DownloadError\r\n\r\ndef safe_download(url):\r\n    ydl_opts = {}\r\n    try:\r\n        with yt_dlp.YoutubeDL(ydl_opts) as ydl:\r\n            ydl.download([url])\r\n    except DownloadError as e:\r\n        print(f\"Error downloading {url}: {str(e)}\")\r\n\r\n# Usage\r\nsafe_download('https://www.youtube.com/watch?v=dQw4w9WgXcQ')\n"})}),"\n",(0,t.jsx)(n.h2,{id:"8-batch-download-from-file",children:"8. Batch Download from File"}),"\n",(0,t.jsx)(n.p,{children:"Download videos listed in a text file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import yt_dlp\r\n\r\ndef batch_download(file_path):\r\n    with open(file_path, 'r') as f:\r\n        urls = [line.strip() for line in f]\r\n\r\n    ydl_opts = {}\r\n    with yt_dlp.YoutubeDL(ydl_opts) as ydl:\r\n        ydl.download(urls)\r\n\r\n# Usage\r\nbatch_download('video_urls.txt')\n"})}),"\n",(0,t.jsx)(n.h2,{id:"9-download-with-authentication",children:"9. Download with Authentication"}),"\n",(0,t.jsx)(n.p,{children:"Download content that requires authentication:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import yt_dlp\r\n\r\nydl_opts = {\r\n    'username': 'your_username',\r\n    'password': 'your_password',\r\n}\r\n\r\nwith yt_dlp.YoutubeDL(ydl_opts) as ydl:\r\n    ydl.download(['https://www.example.com/private_video'])\n"})}),"\n",(0,t.jsx)(n.h2,{id:"10-custom-format-selection",children:"10. Custom Format Selection"}),"\n",(0,t.jsx)(n.p,{children:"Select a specific format for download:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import yt_dlp\r\n\r\nydl_opts = {\r\n    'format': 'bestvideo[height<=1080]+bestaudio/best[height<=1080]'\r\n}\r\n\r\nwith yt_dlp.YoutubeDL(ydl_opts) as ydl:\r\n    ydl.download(['https://www.youtube.com/watch?v=dQw4w9WgXcQ'])\n"})}),"\n",(0,t.jsx)(n.p,{children:"These examples demonstrate various ways to embed yt-dlp functionality in your Python scripts. You can combine and modify these examples to suit your specific needs. Remember to handle exceptions, respect website terms of service, and consider performance implications when working with large numbers of videos or playlists."})]})}function c(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>i});var t=o(6540);const d={},l=t.createContext(d);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);