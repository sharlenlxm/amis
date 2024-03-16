amis.define('docs/zh-CN/components/form/static.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Static 静态展示",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "Static 静态展示",
    "icon": null,
    "order": 52,
    "html": "<div class=\"markdown-body\"><blockquote>\n<p>推荐在<code>2.4.0</code>版本后使用<a href=\"./formitem#配置静态展示\">新版静态展示</a>来实现该功能\n常用表单项已支持静态展示：<a href=\"./formitem#支持静态展示的表单项\">支持静态展示的表单项</a>，展示效果请查看<a href=\"../../../examples/form/switchDisplay\">示例页</a>\n新版静态展示还可以实现整个表单的静态展示及切换，具体用法请参考<a href=\"./index#表单静态展示\">表单静态展示</a></p>\n</blockquote>\n<p>用来在表单中，展示静态数据</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"body\": [\n        {\n            \"name\": \"static\",\n            \"type\": \"static\",\n            \"label\": \"静态展示\",\n            \"value\": \"aaa\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%95%B0%E6%8D%AE%E5%9F%9F%E5%8F%98%E9%87%8F%E6%98%A0%E5%B0%84\" href=\"#%E6%95%B0%E6%8D%AE%E5%9F%9F%E5%8F%98%E9%87%8F%E6%98%A0%E5%B0%84\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>数据域变量映射</h2><p>除了显式配置<code>value</code>属性，来展示数据以外，支持通过配置<code>name</code>属性，来自动映射数据域中的相关变量</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"body\": [\n        {\n            \"type\": \"select\",\n            \"name\": \"select\",\n            \"label\": \"select\",\n            \"options\": [\n                {\n                    \"label\":\"A\",\n                    \"value\":\"a\"\n                },\n                {\n                    \"label\":\"B\",\n                    \"value\":\"b\"\n                },\n                {\n                    \"label\":\"C\",\n                    \"value\":\"c\"\n                }\n            ]\n        },\n        {\n            \"type\": \"static\",\n            \"name\": \"select\",\n            \"label\": \"选中的值是\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%95%E7%A4%BA%E5%85%B6%E4%BB%96%E7%BB%84%E4%BB%B6\" href=\"#%E5%B1%95%E7%A4%BA%E5%85%B6%E4%BB%96%E7%BB%84%E4%BB%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>展示其他组件</h2><p>支持通过配置<code>type</code>为<code>static-xxx</code>的形式，展示其他 <strong>非<a href=\"./formitem\">表单项</a></strong> 组件，例如：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"body\": [\n        {\n            \"type\": \"static-json\",\n            \"name\": \"json\",\n            \"label\": \"静态展示JSON\",\n            \"value\": {\n                \"a\": \"aaa\",\n                \"b\": \"bbb\"\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>理论上可以支持所有非表达项的所有组件，并且支持对应的配置项，下面是一些示例：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"data\": {\n        \"id\": 1,\n        \"image\": \"https://suda.cdn.bcebos.com/amis/images/alice-macaw.jpg\",\n        \"images\": [\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"src\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692942/d8e4992057f9.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"src\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692942/d8e4992057f9.jpeg\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693148/1314a2a3d3f6.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"src\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693148/1314a2a3d3f6.jpeg\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693379/8f2e79f82be0.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"src\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693379/8f2e79f82be0.jpeg\"\n            },\n            {\n                \"image\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693566/552b175ef11d.jpeg@s_0,w_216,l_1,f_jpg,q_80\",\n                \"src\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395693566/552b175ef11d.jpeg\"\n            }\n        ]\n    },\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/saveForm?waitSeconds=2\",\n    \"title\": \"表单项静态展示\",\n    \"mode\": \"horizontal\",\n    \"body\": [\n        {\n            \"type\": \"static\",\n            \"label\": \"文本\",\n            \"value\": \"文本\"\n        },\n        {\n            \"type\": \"divider\"\n        },\n        {\n            \"type\": \"static-tpl\",\n            \"label\": \"模板\",\n            \"tpl\": \"自己拼接 HTML 取变量 \\\\${id}: ${id}\"\n        },\n        {\n            \"type\": \"divider\"\n        },\n        {\n            \"type\": \"static-date\",\n            \"label\": \"日期\",\n            \"value\": 1593327764\n        },\n        {\n            \"type\": \"divider\"\n        },\n        {\n            \"type\": \"static-datetime\",\n            \"label\": \"日期时间\",\n            \"value\": 1593327764\n        },\n        {\n            \"type\": \"divider\"\n        },\n        {\n            \"type\": \"static-mapping\",\n            \"label\": \"映射\",\n            \"value\": 2,\n            \"map\": {\n                \"0\": \"<span class='label label-info'>一</span>\",\n                \"1\": \"<span class='label label-success'>二</span>\",\n                \"2\": \"<span class='label label-danger'>三</span>\",\n                \"3\": \"<span class='label label-warning'>四</span>\",\n                \"4\": \"<span class='label label-primary'>五</span>\",\n                \"*\": \"<span class='label label-default'>-</span>\"\n            }\n        },\n        {\n            \"type\": \"divider\"\n        },\n        {\n            \"type\": \"static-progress\",\n            \"label\": \"进度\",\n            \"value\": 66.66\n        },\n        {\n            \"type\": \"divider\"\n        },\n        {\n            \"type\": \"static-image\",\n            \"label\": \"图片\",\n            \"name\": \"image\",\n            \"thumbMode\": \"cover\",\n            \"thumbRatio\": \"4:3\",\n            \"title\": \"233\",\n            \"imageCaption\": \"jfe fjkda fejfkda fejk fdajf dajfe jfkda\",\n            \"popOver\": {\n                \"title\": \"查看大图\",\n                \"body\": \"<div class=\\\"w-xxl\\\"><img class=\\\"w-full\\\" src=\\\"${image}\\\"/></div>\"\n            }\n        },\n        {\n            \"type\": \"divider\"\n        },\n        {\n            \"type\": \"static-image\",\n            \"label\": \"图片自带放大\",\n            \"name\": \"image\",\n            \"thumbMode\": \"cover\",\n            \"thumbRatio\": \"4:3\",\n            \"title\": \"233\",\n            \"imageCaption\": \"jfe fjkda fejfkda fejk fdajf dajfe jfkda\",\n            \"enlargeAble\": true,\n            \"originalSrc\": \"${image}\"\n        },\n        {\n            \"type\": \"static-images\",\n            \"label\": \"图片集\",\n            \"name\": \"images\",\n            \"thumbMode\": \"cover\",\n            \"thumbRatio\": \"4:3\",\n            \"enlargeAble\": true,\n            \"originalSrc\": \"${src}\"\n        },\n        {\n            \"type\": \"divider\"\n        },\n        {\n            \"type\": \"static-json\",\n            \"label\": \"JSON\",\n            \"value\": {\n                \"a\": 1,\n                \"b\": 2,\n                \"c\": {\n                    \"d\": 3\n                }\n            }\n        },\n        {\n            \"type\": \"divider\"\n        },\n        {\n            \"type\": \"static\",\n            \"label\": \"可复制\",\n            \"value\": \"文本\",\n            \"copyable\": {\n                \"content\": \"内容，支持变量 ${id}\"\n            }\n        },\n        {\n            \"type\": \"divider\"\n        },\n        {\n            \"type\": \"static\",\n            \"name\": \"text\",\n            \"label\": \"可快速编辑\",\n            \"value\": \"文本\",\n            \"quickEdit\": true\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>想要调整展示组件的配置，请查阅相应组件的文档。</p>\n<h2><a class=\"anchor\" name=\"%E5%BF%AB%E9%80%9F%E7%BC%96%E8%BE%91\" href=\"#%E5%BF%AB%E9%80%9F%E7%BC%96%E8%BE%91\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>快速编辑</h2><p>通过 <code>quickEdit</code> 开启快速编辑功能，比如</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"body\": [\n        {\n            \"name\": \"static\",\n            \"type\": \"static\",\n            \"label\": \"静态展示\",\n            \"value\": \"aaa\",\n            \"quickEdit\": {\n                \"type\": \"number\"\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>其他配置项参考 <a href=\"../crud#快速编辑\">快速编辑</a></p>\n<h2><a class=\"anchor\" name=\"%E5%BC%B9%E5%87%BA%E6%A1%86-popover-\" href=\"#%E5%BC%B9%E5%87%BA%E6%A1%86-popover-\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>弹出框（popOver）</h2><p>可以通过 <code>popOver</code> 属性配置弹出框</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"body\": [\n        {\n            \"name\": \"static\",\n            \"type\": \"static\",\n            \"label\": \"静态展示\",\n            \"value\": \"aaa\",\n             \"popOver\": {\n                \"body\": {\n                    \"type\": \"tpl\",\n                    \"tpl\": \"弹出内容\"\n                }\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "数据域变量映射",
          "fragment": "%E6%95%B0%E6%8D%AE%E5%9F%9F%E5%8F%98%E9%87%8F%E6%98%A0%E5%B0%84",
          "fullPath": "#%E6%95%B0%E6%8D%AE%E5%9F%9F%E5%8F%98%E9%87%8F%E6%98%A0%E5%B0%84",
          "level": 2
        },
        {
          "label": "展示其他组件",
          "fragment": "%E5%B1%95%E7%A4%BA%E5%85%B6%E4%BB%96%E7%BB%84%E4%BB%B6",
          "fullPath": "#%E5%B1%95%E7%A4%BA%E5%85%B6%E4%BB%96%E7%BB%84%E4%BB%B6",
          "level": 2
        },
        {
          "label": "快速编辑",
          "fragment": "%E5%BF%AB%E9%80%9F%E7%BC%96%E8%BE%91",
          "fullPath": "#%E5%BF%AB%E9%80%9F%E7%BC%96%E8%BE%91",
          "level": 2
        },
        {
          "label": "弹出框（popOver）",
          "fragment": "%E5%BC%B9%E5%87%BA%E6%A1%86-popover-",
          "fullPath": "#%E5%BC%B9%E5%87%BA%E6%A1%86-popover-",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
