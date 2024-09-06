import { motion } from "framer-motion";

export default function DevhostLogo() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0, fill: "rgba(0, 0, 0, 0)" },
    visible: ({ color, i }) => {
      const delay = 0.1 + i * 0.1;
      console.log(color);
      return {
        pathLength: 1,
        opacity: 1,
        fill: color || "rgba(255, 255, 255, 1)",
        transition: {
          pathLength: { delay, type: "spring", duration: 0.3, bounce: 0 },
          opacity: { delay, duration: 0.01 },
          fill: { delay: delay + 0.1, duration: 0.7 },
        },
      };
    },
  };

  return (
    <motion.svg
      width="1647"
      height="239"
      viewBox="0 0 1647 239"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-xl self-center px-8 mb-20"
      initial="hidden"
      whileInView={"visible"}
      stroke={"white"}
      strokeWidth={4}
    >
      <motion.path
        d="M0 7.11465C0 6.03662 0.332074 5.17419 0.996222 4.52737C1.88175 3.66494 2.87797 3.23372 3.98489 3.23372H78.0374C93.9769 3.23372 108.92 6.14442 122.867 11.9658C136.814 17.7872 148.991 25.7646 159.396 35.8981C169.801 45.816 178.102 57.5666 184.301 71.1498C190.721 84.5174 194.042 98.8553 194.263 114.163C194.706 130.118 191.717 145.103 185.297 159.117C179.099 173.132 170.575 185.421 159.728 195.986C148.88 206.335 136.15 214.528 121.539 220.565C107.149 226.602 91.7631 229.621 75.3808 229.621H3.98489C2.87797 229.621 1.88175 229.297 0.996222 228.651C0.332074 227.788 0 226.818 0 225.74V7.11465ZM42.5055 188.548H78.0374C88.221 188.548 97.7404 186.715 106.596 183.05C115.672 179.169 123.532 173.994 130.173 167.526C137.036 160.842 142.349 153.188 146.113 144.564C150.097 135.724 152.09 126.345 152.09 116.427C152.09 106.509 150.097 97.2382 146.113 88.614C142.349 79.7741 137.036 72.1201 130.173 65.6519C123.532 58.968 115.672 53.7935 106.596 50.1282C97.7404 46.2473 88.221 44.3068 78.0374 44.3068H42.5055V188.548Z"
        variants={draw}
        custom={{ i: 0 }}
      />
      <motion.path
        d="M232.841 7.11465C232.841 6.03662 233.173 5.17419 233.837 4.52737C234.723 3.66494 235.719 3.23372 236.826 3.23372H380.282C382.938 3.23372 384.267 4.52737 384.267 7.11465V40.4259C384.267 43.0132 382.938 44.3068 380.282 44.3068H275.346V96.0524H358.365C361.022 96.0524 362.35 97.346 362.35 99.9333V132.921C362.35 135.724 361.022 137.125 358.365 137.125H275.346V188.548H390.576C391.904 188.548 392.79 189.087 393.233 190.165C393.897 191.243 393.786 192.213 392.901 193.075L368.327 224.446C365.449 227.896 361.796 229.621 357.369 229.621H236.826C235.719 229.621 234.723 229.297 233.837 228.651C233.173 227.788 232.841 226.818 232.841 225.74V7.11465Z"
        variants={draw}
        custom={{ i: 1 }}
      />
      <motion.path
        d="M429.13 2.58691H463.334C464.441 2.58691 465.437 3.01813 466.323 3.88056C467.208 4.52737 467.651 5.38979 467.651 6.46782V159.117L586.866 7.76147C589.743 4.31177 593.396 2.58691 597.824 2.58691H639.997C641.326 2.58691 642.211 3.12593 642.654 4.20396C643.318 5.28199 643.318 6.25222 642.654 7.11465L471.636 223.799C468.758 227.249 465.105 228.974 460.677 228.974H429.13C428.023 228.974 427.027 228.651 426.142 228.004C425.478 227.141 425.145 226.171 425.145 225.093V6.46782C425.145 5.38979 425.478 4.52737 426.142 3.88056C427.027 3.01813 428.023 2.58691 429.13 2.58691Z"
        variants={draw}
        custom={{ i: 2 }}
      />
      <motion.path
        d="M680.414 222.506V3.88095C680.414 2.80292 680.747 1.94048 681.411 1.29366C682.296 0.431228 683.292 0 684.399 0H718.603C721.481 0 722.92 1.29366 722.92 3.88095V92.8187H818.225V3.88095C818.225 2.80292 818.557 1.94048 819.221 1.29366C820.107 0.431228 821.103 0 822.21 0H856.746C857.853 0 858.738 0.431228 859.402 1.29366C860.288 1.94048 860.731 2.80292 860.731 3.88095V222.506C860.731 223.584 860.288 224.554 859.402 225.417C858.738 226.064 857.853 226.387 856.746 226.387H822.21C821.103 226.387 820.107 226.064 819.221 225.417C818.557 224.554 818.225 223.584 818.225 222.506V133.892H722.92V222.506C722.92 225.093 721.481 226.387 718.603 226.387H684.399C683.292 226.387 682.296 226.064 681.411 225.417C680.747 224.554 680.414 223.584 680.414 222.506Z"
        variants={draw}
        custom={{ i: 3 }}
      />
      <motion.path
        d="M893.116 118.661C893.116 102.06 896.215 86.644 902.414 72.4139C908.834 57.9683 917.357 45.5709 927.983 35.2218C938.831 24.657 951.561 16.464 966.172 10.6426C980.783 4.60562 996.501 1.6949 1013.33 1.91051C1030.15 2.12611 1045.87 5.36021 1060.48 11.6128C1075.09 17.8654 1087.71 26.3819 1098.34 37.1622C1109.19 47.9426 1117.71 60.5555 1123.91 75.0012C1130.11 89.2312 1133.09 104.431 1132.87 120.602C1132.65 136.988 1129.33 152.296 1122.91 166.526C1116.49 180.756 1107.75 193.154 1096.68 203.718C1085.83 214.283 1073.1 222.584 1058.49 228.621C1043.88 234.442 1028.16 237.353 1011.33 237.353C994.73 237.353 979.123 234.334 964.512 228.297C950.122 222.045 937.614 213.636 926.987 203.071C916.361 192.291 908.059 179.678 902.082 165.232C896.104 150.787 893.116 135.263 893.116 118.661ZM935.621 120.278C935.621 130.843 937.724 140.869 941.93 150.356C946.137 159.842 951.782 168.143 958.866 175.258C965.951 182.373 974.142 187.979 983.44 192.075C992.738 196.172 1002.7 198.22 1013.33 198.22C1023.73 198.005 1033.58 195.741 1042.88 191.429C1052.18 187.116 1060.26 181.403 1067.12 174.288C1074.21 166.957 1079.74 158.549 1083.73 149.062C1087.71 139.36 1089.59 129.226 1089.37 118.661C1089.37 108.097 1087.27 98.0711 1083.06 88.5844C1078.86 79.0977 1073.21 70.9047 1066.13 64.0052C1059.04 56.8902 1050.74 51.2844 1041.22 47.1879C1031.92 43.0914 1022.07 41.0431 1011.67 41.0431C1001.26 41.2587 991.41 43.5226 982.111 47.8348C972.813 51.9313 964.733 57.6448 957.87 64.9755C951.007 72.0905 945.583 80.3914 941.598 89.878C937.614 99.3647 935.621 109.498 935.621 120.278Z"
        variants={draw}
        custom={{ i: 4 }}
      />
      <motion.path
        d="M1162.43 73.4143C1162.43 63.2807 1164.54 53.9018 1168.74 45.2776C1173.17 36.6533 1179.04 29.2149 1186.34 22.9623C1193.87 16.7097 1202.5 11.7508 1212.25 8.08545C1222.21 4.42013 1232.72 2.58743 1243.79 2.58743C1261.06 2.58743 1276 5.60594 1288.62 11.6429C1301.46 17.4643 1311.09 24.2559 1317.51 32.0178C1319.06 33.9582 1318.95 35.6831 1317.18 37.1923L1294.27 60.4778C1293.38 61.3403 1292.28 61.7715 1290.95 61.7715C1289.84 61.7715 1288.84 61.2325 1287.96 60.1545C1285.97 57.9984 1283.42 55.8423 1280.32 53.6862C1277.44 51.5302 1274.01 49.5897 1270.03 47.8648C1266.26 45.9244 1262.17 44.4151 1257.74 43.3371C1253.31 42.2591 1248.77 41.7201 1244.12 41.7201C1238.59 41.7201 1233.5 42.5825 1228.85 44.3073C1224.42 45.8166 1220.66 47.8649 1217.56 50.4521C1214.46 53.0394 1212.02 56.0579 1210.25 59.5076C1208.48 62.9573 1207.6 66.6226 1207.6 70.5035C1207.6 76.7561 1209.7 82.1463 1213.91 86.6741C1218.11 91.2018 1224.42 94.3281 1232.83 96.053L1265.38 102.198C1276 104.138 1285.3 107.264 1293.27 111.576C1301.46 115.673 1308.22 120.632 1313.53 126.453C1319.06 132.275 1323.27 138.851 1326.15 146.181C1329.03 153.296 1330.46 160.843 1330.46 168.82C1330.46 177.444 1328.58 185.961 1324.82 194.369C1321.28 202.778 1315.85 210.324 1308.55 217.008C1301.46 223.692 1292.72 229.082 1282.31 233.179C1271.91 237.06 1259.95 239 1246.45 239C1236.93 239 1227.96 238.03 1219.55 236.089C1211.36 234.149 1203.83 231.669 1196.97 228.651C1190.33 225.417 1184.46 221.967 1179.37 218.302C1174.28 214.421 1170.07 210.648 1166.75 206.982C1165.2 205.473 1165.2 203.748 1166.75 201.808L1187.67 175.612C1188.34 174.534 1189.22 173.995 1190.33 173.995C1191.66 173.779 1192.76 174.102 1193.65 174.965C1196.75 177.768 1200.18 180.678 1203.94 183.697C1207.71 186.5 1211.8 189.087 1216.23 191.459C1220.66 193.83 1225.42 195.771 1230.51 197.28C1235.6 198.789 1241.03 199.544 1246.78 199.544C1258.96 199.544 1268.26 196.957 1274.68 191.782C1281.1 186.608 1284.31 179.924 1284.31 171.731C1284.31 165.263 1281.87 159.657 1277 154.913C1272.35 149.955 1265.38 146.613 1256.08 144.888L1223.54 138.42C1204.94 134.754 1190.11 127.316 1179.04 116.104C1167.97 104.893 1162.43 90.6628 1162.43 73.4143Z"
        variants={draw}
        custom={{ i: 5 }}
      />
      <motion.path
        d="M1359 12.4077C1359 11.3297 1359.34 10.4672 1360 9.82042C1360.89 8.95799 1361.88 8.5268 1362.99 8.5268H1507.11C1511.54 8.5268 1515.19 10.2516 1518.07 13.7013L1542.64 45.0721C1543.53 46.1501 1543.64 47.2282 1542.97 48.3062C1542.53 49.1686 1541.64 49.5998 1540.32 49.5998H1466.26V231.033C1466.26 233.62 1464.93 234.914 1462.28 234.914H1428.07C1425.42 234.914 1424.09 233.62 1424.09 231.033V49.5998H1362.99C1361.88 49.5998 1360.89 49.2764 1360 48.6296C1359.34 47.7672 1359 46.797 1359 45.719V12.4077Z"
        variants={draw}
        custom={{ i: 6 }}
      />
      <motion.path
        d="M1585.65 234.812L1575.53 227.307C1574.41 226.428 1573.86 225.313 1573.86 223.96V189.275C1573.86 188.937 1574 188.666 1574.28 188.464C1574.55 188.193 1574.87 188.058 1575.21 188.058H1590.97C1591.6 188.058 1592.19 188.261 1592.74 188.666L1633.75 219.194V189.275C1633.75 188.937 1633.89 188.666 1634.17 188.464C1634.38 188.193 1634.65 188.058 1635 188.058H1645.64C1645.99 188.058 1646.3 188.193 1646.58 188.464C1646.86 188.666 1647 188.937 1647 189.275V231.263C1647 231.601 1646.86 231.905 1646.58 232.175C1646.3 232.378 1645.99 232.48 1645.64 232.48H1628.95L1587.11 201.242V234.102C1587.11 234.44 1586.97 234.711 1586.69 234.914C1586.34 235.116 1586 235.083 1585.65 234.812Z"
        variants={draw}
        stroke={"#B4FF39"}
        custom={{ color: "rgb(180, 255, 57,1)", i: 7 }}
      />
      <motion.path
        d="M1645.64 175.605H1575.21C1574.87 175.605 1574.55 175.504 1574.28 175.301C1574 175.031 1573.86 174.727 1573.86 174.388V124.49C1573.86 123.679 1574.31 123.273 1575.21 123.273H1645.64C1646.55 123.273 1647 123.679 1647 124.49V174.388C1647 174.727 1646.86 175.031 1646.58 175.301C1646.3 175.504 1645.99 175.605 1645.64 175.605ZM1587.11 162.624H1633.64V136.255L1587.11 136.255V162.624Z"
        fill="#B4FF39"
        variants={draw}
        stroke={"#B4FF39"}
        custom={{ color: "rgb(180, 255, 57,1)", i: 8 }}
      />
      <motion.path
        d="M1585.65 112L1575.53 104.495C1574.41 103.616 1573.86 102.5 1573.86 101.148V66.4624C1573.86 66.1243 1574 65.8539 1574.28 65.651C1574.55 65.3806 1574.87 65.2454 1575.21 65.2454H1590.97C1591.6 65.2454 1592.19 65.4482 1592.74 65.8539L1633.75 96.3811V66.4624C1633.75 66.1243 1633.89 65.8539 1634.17 65.651C1634.38 65.3806 1634.65 65.2454 1635 65.2454H1645.64C1645.99 65.2454 1646.3 65.3806 1646.58 65.651C1646.86 65.8539 1647 66.1243 1647 66.4624V108.45C1647 108.788 1646.86 109.092 1646.58 109.363C1646.3 109.566 1645.99 109.667 1645.64 109.667H1628.95L1587.11 78.4299V111.29C1587.11 111.628 1586.97 111.898 1586.69 112.101C1586.34 112.304 1586 112.27 1585.65 112Z"
        fill="#B4FF39"
        variants={draw}
        stroke={"#B4FF39"}
        custom={{ color: "rgb(180, 255, 57,1)", i: 9 }}
      />
      <motion.path
        d="M1608.71 57.3568L1575.53 32.6105C1574.41 31.8668 1573.86 30.785 1573.86 29.3651V16.3834C1573.86 16.0454 1574.03 15.8087 1574.38 15.6735C1574.73 15.4706 1575.08 15.4706 1575.42 15.6735L1614.65 45.0851V11.211C1614.65 10.3997 1615.11 9.99399 1616.01 9.99399H1645.64C1646.55 9.99399 1647 10.3997 1647 11.211V21.6572C1647 22.4686 1646.55 22.8743 1645.64 22.8743H1628.01V57.0526C1628.01 57.3907 1627.87 57.6949 1627.59 57.9654C1627.31 58.1682 1627 58.2696 1626.65 58.2696H1611.32C1610.27 58.2696 1609.4 57.9654 1608.71 57.3568Z"
        fill="#B4FF39"
        variants={draw}
        stroke={"#B4FF39"}
        custom={{ color: "rgb(180, 255, 57,1)", i: 10 }}
      />
    </motion.svg>
  );
}
