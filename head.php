<?php
$data = [
    'src' => 'https://yunheyu.tw/',
    'title' => '合展雲禾月丨河濱公園國道五分鐘丨官網',
    'description' => '合展雲禾月：河濱公園汐東線，國一國三樞紐，城市與自然左右逢源 ，南軟內科後花園，接待會館：汐止區．樟樹二路，預約專線02-29993969',
    'keyword' => '合展雲禾月,汐止建案,汐止買房,汐東買房,汐止新案',
    'image' => 'https://yunheyu.tw/og.jpg'
];

$docTitle = $data['title'];
$siteName = $data['title'];
$docDesc = $data['description'];
$keyWords = $data['keyword'];
$ogType = 'website';
$shareUrl = $data['src'];
$shareImg = $data['image'];
?>

<title><?php echo $docTitle; ?></title>
<meta name="description" content="<?php echo $docDesc ?>">
<meta name="keywords" content="<?php echo $keyWords ?>">

<!-- Open Graph -->
<meta property="og:locale" content="zh_TW" />
<meta property="og:type" content="<?php echo $ogType ?>" />
<meta property="og:title" content="<?php echo $docTitle; ?>" />
<meta property="og:description" content="<?php echo $docDesc ?>" />
<meta property="og:site_name" content="<?php echo $siteName; ?>" />
<meta property="og:url" content="<?php echo $shareUrl; ?>" />
<meta property="og:image" content="<?php echo $shareImg; ?>" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="<?php echo $docTitle; ?>" />
<meta name="twitter:description" content="<?php echo $docDesc ?>" />
<meta name="twitter:image" content="<?php echo $shareImg; ?>" />

<!-- Schema.org -->
<meta itemprop="name" content="<?php echo $docTitle; ?>">
<meta itemprop="description" content="<?php echo $docDesc ?>">
<meta itemprop="image" content="<?php echo $shareImg; ?>">
