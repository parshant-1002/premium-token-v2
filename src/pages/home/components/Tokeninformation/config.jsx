import { RenderIconWithHover } from "../../../../shared/components/RenderIconWithHover";
import { INPUT_TYPES } from "../../../../shared/constants";
import { isValidSolanaAddress } from "../../../../shared/constants/utils";
import { FORM_VALIDATION_MESSAGES } from "../../../../shared/constants/validations";
import { addBaseUrlToUrls, redirectToUrlInNewTab } from "../../../../shared/utilities";

export const data = {
    labels: ['65%', '10%', '10%', '5%', '4.5%', '4.5%', '1%'],
    datasets: [{
        data: [65, 10, 10, 5, 4.5, 4.5, 1],
        backgroundColor: [
            '#389989',
            '#0D2624',
            '#1F423D',
            '#3D615D',
            '#637371',
            '#256059',
            '#031815',
        ],
        hoverOffset: 4
    }]
};
export const options = {
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
        legend: {
            display: false, // This will remove the legend
        },
        tooltip: {
            enabled: false, // This disables tooltips
        },
        datalabels: {
            display: true,
            color: '#fff',
            font:  (context) => {
                // Dynamically adjust font size based on the value of the segment
                const value = context.dataset.data[context.dataIndex];
                if (value >= 10) return { size: 16};  // For larger segments
                if (value >= 5) return { size: 14 };   // For medium segments
                return { size: 12 };                   // For smaller segments
                
            },
            formatter: (value, context) => {
                return context.chart.data.labels[context.dataIndex];
            },
            offset: (context) => {
                // Calculate offset based on the circumference of the segment
                const circumference = context.chart.getDatasetMeta(0).data[context.dataIndex].circumference;
                return circumference > Math.PI ? 8 : 16; // if the segment is larger than half the circle, use a set offset
            },
            anchor: 'end',
            align: 'start',
        },
    },
    elements: {
        arc: {
            borderWidth: 0, // This will remove the chart border
        },
    },
};

export const AIRDROP_SOCIAL_FIELDS_FORM_SCHEMA = (data = {}) => {
    const{discord, facebook, instagram, premiumToken, telegram, tiktok, title, twitter} = data

    return {
    walletAddress: {
        type: INPUT_TYPES.TEXT,
        icon: <RenderIconWithHover link={premiumToken?.link} onClick ={ ()=>{redirectToUrlInNewTab(premiumToken?.link)} } iconUrl={addBaseUrlToUrls(premiumToken?.iconUrl)} hoverIconUrl={addBaseUrlToUrls(premiumToken?.hovers)} />,
        className: 'col-md-4',
        placeholder: premiumToken?.placeholder,
        schema: (data)=>({
            validate: () => {
                const valid = isValidSolanaAddress(data);
                if (!valid) {
                    return FORM_VALIDATION_MESSAGES().INVALID_SOLANA_ADDRESS;
                }
                return true;
            },
        })
    },
    twitterProfileURL: {
        type: INPUT_TYPES.TEXT,
        icon: <RenderIconWithHover  link={twitter?.link} onClick={() => { redirectToUrlInNewTab(twitter?.link) }}  iconUrl={addBaseUrlToUrls(twitter?.iconUrl)} hoverIconUrl={addBaseUrlToUrls(twitter?.hovers)} />,
        className: 'col-md-4',
        placeholder: twitter?.placeholder,
    },
    telegramUsername: {
        type: INPUT_TYPES.TEXT,
        icon: <RenderIconWithHover  link={telegram?.link} onClick={() => { redirectToUrlInNewTab(telegram?.link) }} iconUrl={addBaseUrlToUrls(telegram?.iconUrl)} hoverIconUrl={addBaseUrlToUrls(telegram?.hovers)} />,
        className: 'col-md-4',
        placeholder: telegram?.placeholder,
    },
    instagramProfileURL: {
        type: INPUT_TYPES.TEXT,
        icon: <RenderIconWithHover link={instagram?.link} onClick={() => { redirectToUrlInNewTab(instagram?.link) }}  iconUrl={addBaseUrlToUrls(instagram?.iconUrl)} hoverIconUrl={addBaseUrlToUrls(instagram?.hovers)} />,
        className: 'col-md-4',
        placeholder: instagram?.placeholder,
    },
    facebookProfileURL: {
        type: INPUT_TYPES.TEXT,
        icon: <RenderIconWithHover link={facebook?.link} onClick={() => { redirectToUrlInNewTab(facebook?.link) }}  iconUrl={addBaseUrlToUrls(facebook?.iconUrl)} hoverIconUrl={addBaseUrlToUrls(facebook?.hovers)} />,
        className: 'col-md-4',
        placeholder: facebook?.placeholder,
    },
    discordUsername: {
        type: INPUT_TYPES.TEXT,
        icon: <RenderIconWithHover link={discord?.link} onClick={() => { redirectToUrlInNewTab(discord?.link) }} iconUrl={addBaseUrlToUrls(discord?.iconUrl)} hoverIconUrl={addBaseUrlToUrls(discord?.hovers)} />,
        className: 'col-md-4',
        placeholder: discord?.placeholder,
    },
    tiktokProfileURL: {
        type: INPUT_TYPES.TEXT,
        icon: <RenderIconWithHover link={tiktok?.link} onClick={() => { redirectToUrlInNewTab(tiktok?.link) }} iconUrl={addBaseUrlToUrls(tiktok?.iconUrl)} hoverIconUrl={addBaseUrlToUrls(tiktok?.hovers)} />,
        className: 'col-md-4',
        placeholder: tiktok?.placeholder,
    },

}};