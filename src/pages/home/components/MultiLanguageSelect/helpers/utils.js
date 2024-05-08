export function transformLanguageOptions(data) {
    return data?.map(item => ({
        label: item?.name,
        value: item?._id,
        languageCode: item?.language,
        imageUrl: item?.imageUrl
    }));
}
