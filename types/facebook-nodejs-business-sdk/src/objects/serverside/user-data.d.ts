/**
 * UserData represents the User Data Parameters(user_data) of a Conversions API Event Request.
 * 'user_data' is a set of identifiers Facebook can use for targeted attribution. See Custom Audiences from CRM Data for details on how to normalize and hash the data you send.
 * @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters}
 */
export default class UserData {
    _emails: string[];
    _phones: string[];
    _genders: string[];
    _first_names: string[];
    _last_names: string[];
    _dates_of_birth: string[];
    _cities: string[];
    _states: string[];
    _zips: string[];
    _countries: string[];
    _external_ids: string[];
    _client_ip_address: string;
    _client_user_agent: string;
    _fbc: string;
    _fbp: string;
    _subscription_id: string;
    _fb_login_id: string;
    _lead_id: string;
    _f5first: string;
    _f5last: string;
    _fi: string;
    _dobd: string;
    _dobm: string;
    _doby: string;
    _madid: string;
    _anon_id: string;
    _app_user_id: string;
    _ctwa_clid: string;
    _page_id: string;
    /**
     * @param {String} email An email address, in lowercase.
     * @param {String} phone A phone number. Include only digits with country code, area code, and number.
     * @param {String} gender Gender, in lowercase. Either f or m.
     * @param {String} first_name A first name in lowercase.
     * @param {String} last_name A last name in lowercase.
     * @param {String} date_of_birth A date of birth given as year, month, and day in YYYYMMDD format.
     * @param {String} city A city in lower-case without spaces or punctuation.
     * @param {String} state A two-letter state code in lowercase.
     * @param {String} zip Postal code of the city in your country standard
     * @param {String} country A two-letter country code in lowercase.
     * @param {String} external_id Any unique ID from the advertiser,
     * @param {String} client_ip_address The IP address of the browser corresponding to the event.
     * @param {String} client_user_agent The user agent for the browser corresponding to the event.
     * @param {String} fbp The Facebook click ID value stored in the _fbc browser cookie under your domain.
     * @param {String} fbc The Facebook browser ID value stored in the _fbp browser cookie under your domain.
     * @param {String} subscription_id The subscription ID for the user in this transaction.
     * @param {String} fb_login_id The FB login ID for the user.
     * @param {String} lead_id The Id associated with a lead generated by Facebook's Lead Ads.
     * @param {String} dobd The date of birth day in DD format.
     * @param {String} dobm The date of birth month in MM format.
     * @param {String} doby The date of birth year in YYYY format.
     * @param {String} madid
     * @param {String} anon_id
     * @param {String} app_user_id
     * @param {String} ctwa_clid ID of a conversation that was started on WhatsApp
     * @param {String} page_id ID of the page that the ad is associated with
     */
    constructor(email?: string, phone?: string, gender?: string, first_name?: string, last_name?: string, date_of_birth?: string, city?: string, state?: string, zip?: string, country?: string, external_id?: string, client_ip_address?: string, client_user_agent?: string, fbp?: string, fbc?: string, subscription_id?: string, fb_login_id?: string, lead_id?: string, dobd?: string, dobm?: string, doby?: string, madid?: string, anon_id?: string, app_user_id?: string, ctwa_clid?: string, page_id?: string);
    static get Gender(): Record<string, any>;
    /**
     * Gets the email address for the user data field.
     * An email address, in lowercase.
     * Example: joe@eg.com
     */
    /**
     * Sets the email address for the user data field.
     * @param email An email address, in lowercase.
     * Example: joe@eg.com
     */
    set email(email: string);
    get email(): string;
    /**
     * Gets email addresses for the user data field.
     * Email addresses, in lowercase.
     * Example: ['joe@eg.com', 'smith@test.com']
     */
    get emails(): string[];
    /**
     * Sets email addresses for the user data field.
     * @param emails Email addresses, in lowercase.
     * Example: ['joe@eg.com', 'smith@test.com']
     */
    set emails(emails: string[]);
    /**
     * Sets the email address for the user data field.
     * @param {String} email An email address, in lowercase.
     * Example: joe@eg.com
     */
    setEmail(email: string): UserData;
    /**
     * Sets email addresses for the user data field.
     * @param emails Email addresses, in lowercase.
     * Example: ['joe@eg.com', 'smith@test.com']
     */
    setEmails(emails: string[]): UserData;
    /**
     * Gets the phone number for the user data.
     * A phone number. Include only digits with country code, area code, and number.
     * Example: 16505551212
     */
    get phone(): string;
    /**
     * Sets the phone number for the user data.
     * @param phone A phone number. Include only digits with country code, area code, and number.
     * Example: 16505551212
     */
    set phone(phone: string);
    /**
     * Gets the phone numbers for the user data.
     * Phone numbers. Include only digits with country code, area code, and number.
     * Example: ['16505551212', '12062072008']
     */
    get phones(): string[];
    /**
     * Sets the phone numbers for the user data.
     * @param phones Phone numbers. Include only digits with country code, area code, and number.
     * Example: ['16505551212', '12062072008']
     */
    set phones(phones: string[]);
    /**
     * Sets the phone number for the user data.
     * @param {String} phone A phone number. Include only digits with country code, area code, and number.
     * Example: 16505551212
     */
    setPhone(phone: string): UserData;
    /**
     * Sets the phone numbers for the user data.
     * @param phones Phone numbers. Include only digits with country code, area code, and number.
     * Example: ['16505551212', '12062072008']
     */
    setPhones(phones: string[]): UserData;
    /**
     * Gets the gender value for the user data.
     * Gender in lowercase. Either f for FEMALE or m for MALE.
     * Example: f
     */
    get gender(): string;
    /**
     * Sets the gender value for the user data.
     * @param gender Gender in lowercase. Either f for FEMALE or m for MALE.
     * Example: f
     */
    set gender(gender: string);
    /**
     * Gets the gender values for the user data.
     * Genders in lowercase. Either f for FEMALE or m for MALE.
     * Example: [f, m]
     */
    get genders(): string[];
    /**
     * Sets the gender values for the user data.
     * @param genders Genders in lowercase. Either f for FEMALE or m for MALE.
     * Example: [f, m]
     */
    set genders(genders: string[]);
    /**
     * Sets the gender value for the user data.
     * @param {String} gender Gender in lowercase. Either f for FEMALE or m for MALE.
     * Example: f
     */
    setGender(gender: string): UserData;
    /**
     * Sets the gender values for the user data.
     * @param genders Genders in lowercase. Either f for FEMALE or m for MALE.
     * Example: [f, m]
     */
    setGenders(genders: string[]): UserData;
    /**
     * Gets the date of birth for the user data.
     * A date of birth given as year, month, and day in the Format YYYYMMDD
     * Example: 19971226 for December 26, 1997.
     */
    get date_of_birth(): string;
    /**
     * Sets the date of birth for the user data.
     * @param date_of_birth A date of birth given as year, month, and day in the Format YYYYMMDD
     * Example: 19971226 for December 26, 1997.
     */
    set date_of_birth(date_of_birth: string);
    /**
     * Gets the dates of birth for the user data.
     * A date of birth given as year, month, and day in the Format YYYYMMDD
     * Example: 19971226 for December 26, 1997.
     */
    get dates_of_birth(): string[];
    /**
     * Sets the dates of birth for the user data.
     * @param dates_of_birth A date of birth given as year, month, and day in the Format YYYYMMDD
     * Example: 19971226 for December 26, 1997.
     */
    set dates_of_birth(dates_of_birth: string[]);
    /**
     * Sets the date of birth for the user data.
     * @param {String} date_of_birth A date of birth given as year, month, and day in the Format YYYYMMDD
     * Example: 19971226 for December 26, 1997.
     */
    setDateOfBirth(date_of_birth: string): UserData;
    /**
     * Sets the dates of birth for the user data.
     * @param {String} dates_of_birth A date of birth given as year, month, and day in the Format YYYYMMDD
     * Example: 19971226 for December 26, 1997.
     */
    setDatesOfBirth(dates_of_birth: string[]): UserData;
    /**
     * Gets the last name for the user data.
     * last_name is the last name in lowercase.
     * Example: smith
    */
   get last_name(): string;
   /**
    * Sets the last name for the user data.
    * @param last_name is last name in lowercase.
    * Example: smith
    */
   set last_name(last_name: string);
    /**
     * Gets the last names for the user data.
     * last_name is the last name in lowercase.
     * Example: ['smith', 'wilson']
     */
    get last_names(): string[];
    /**
     * Sets the last names for the user data.
     * @param last_names is last name in lowercase.
     * Example: ['smith', 'wilson']
     */
    set last_names(last_names: string[]);
    /**
     * Sets the last name for the user data.
     * @param {String} last_name is last name in lowercase.
     * Example: smith
     */
    setLastName(last_name: string): UserData;
    /**
     * Sets the last name for the user data.
     * @param last_names is last name in lowercase.
     * Example: ['smith', 'wilson']
     */
    setLastNames(last_names: string[]): UserData;
    /**
     * Gets the first name for the user data.
     * first_name is first name in lowercase.
     * Example: joe
     */
    get first_name(): string;
    /**
     * Sets the first name for the user data.
     * @param first_name is first name in lowercase.
     * Example: joe
     */
    set first_name(first_name: string);
    /**
    * Gets the first names for the user data.
    * first_name is first name in lowercase.
    * Example: ['joe', 'mary']
    */
    get first_names(): string[];
    /**
    * Sets the first names for the user data.
    * @param first_names is first name in lowercase.
    * Example: ['joe', 'mary']
    */
    set first_names(first_names: string[]);
    /**
     * Sets the first name for the user data.
     * @param {String} first_name is first name in lowercase.
     * Example: joe
     */
    setFirstName(first_name: string): UserData;
    /**
     * Sets the first names for the user data.
     * @param {String} first_names is first name in lowercase.
     * Example: joe
     */
    setFirstNames(first_names: string[]): UserData;
    /**
     * Gets the city for the user data.
     * city is city in lower-case without spaces or punctuation.
     * Example: menlopark
     */
    get city(): string;
    /**
     * Sets the city for the user data.
     * @param city is city in lower-case without spaces or punctuation.
     * Example: menlopark
     */
    set city(city: string);
    /**
     * Gets the cities for the user data.
     * city is city in lower-case without spaces or punctuation.
     * Example:['menlopark', 'seattle']
     */
    get cities(): string[];
    /**
     * Sets the cities for the user data.
     * @param cities is city in lower-case without spaces or punctuation.
     * Example: ['menlopark', 'seattle']
     */
    set cities(cities: string[]);
    /**
     * Sets the city for the user data.
     * @param {String} city is city in lower-case without spaces or punctuation.
     * Example: menlopark
     */
    setCity(city: string): UserData;
    /**
     * Sets the cities for the user data.
     * @param cities is city in lower-case without spaces or punctuation.
     * Example: ['menlopark', 'seattle']
     */
    setCities(cities: string[]): UserData;
    /**
     * Gets the zip/postal code for the user data.
     * zip is a five-digit zip code for United States.For other locations, follow each country's standards.
     * Example: 98121 (for United States zip code)
     */
    get zip(): string;
    /**
     * Sets the zip/postal code for the user data.
     * @param zip is a five-digit zip code for United States.For other locations, follow each country's standards.
     * Example: 98121 (for United States zip code)
     */
    set zip(zip: string);
    /**
     * Gets the zip/postal codes for the user data.
     * zip is a five-digit zip code for United States.For other locations, follow each country's standards.
     * Example: 98121 (for United States zip code)
     */
    get zips(): string[];
    /**
     * Sets the zip/postal codes for the user data.
     * @param zips is a five-digit zip code for United States.For other locations, follow each country's standards.
     * Example: 98121 (for United States zip code)
     */
    set zips(zips: string[]);
    /**
     * Sets the zip/postal code for the user data.
     * @param {String} zip is a five-digit zip code for United States.For other locations, follow each country's standards.
     * Example: 98121 (for United States zip code)
     */
    setZip(zip: string): UserData;
    /**
     * Sets the zip/postal codes for the user data.
     * @param zips is a five-digit zip code for United States.For other locations, follow each country's standards.
     * Example: 98121 (for United States zip code)
     */
    setZips(zips: string[]): UserData;
    /**
     * Gets the state for the user data.
     * state is state in lower-case without spaces or punctuation.
     * Example: ca
     */
    get state(): string;
    /**
     * Sets the state for the user data.
     * @param state is state in lower-case without spaces or punctuation.
     * Example: ca
     */
    set state(state: string);
    /**
     * Gets the states for the user data.
     * state is state in lower-case without spaces or punctuation.
     * Example: ca
     */
    get states(): string[];
    /**
     * Sets the states for the user data.
     * @param states is state in lower-case without spaces or punctuation.
     * Example: ca
     */
    set states(states: string[]);
    /**
     * Sets the state for the user data.
     * @param {String} state is state in lower-case without spaces or punctuation.
     * Example: ca
     */
    setState(state: string): UserData;
    /**
     * Sets the states for the user data.
     * @param states is state in lower-case without spaces or punctuation.
     * Example: ca
     */
    setStates(states: string[]): UserData;
    /**
     * Gets the country for the user data.
     * country is A two-letter country code in lowercase.
     * Example: usa
     */
    get country(): string;
    /**
     * Sets the country for the user data.
     * @param country is A two-letter country code in lowercase.
     * Example: usa
     */
    set country(country: string);
    /**
     * Gets the countries for the user data.
     * country is A two-letter country code in lowercase.
     * Example: usa
     */
    get countries(): string[];
    /**
     * Sets the countries for the user data.
     * @param countries is A two-letter country code in lowercase.
     * Example: usa
     */
    set countries(countries: string[]);
    /**
     * Sets the country for the user data.
     * @param {String} country is A two-letter country code in lowercase.
     * Example: usa
     */
    setCountry(country: string): UserData;
    /**
     * Sets the countries for the user data.
     * @param countries is A two-letter country code in lowercase.
     * Example: usa
     */
    setCountries(countries: string[]): UserData;
    /**
     * Gets the external id for the user data.
     * external_id is a unique ID from the advertiser, such as loyalty membership IDs, user IDs, and external cookie IDs.
     * In the Offline Conversions API this is known as extern_id. For more information, see Offline Conversions.
     * If External ID is being sent via other channels, then it should be sent in the same format via the Conversions API
     * @see {@link https://www.facebook.com/business/help/104039186799009}
     */
    get external_id(): string;
    /**
     * Sets the external id for the user data.
     * @param external_id is a unique ID from the advertiser, such as loyalty membership IDs, user IDs, and external cookie IDs.
     * In the Offline Conversions API this is known as extern_id. For more information, see Offline Conversions.
     * If External ID is being sent via other channels, then it should be sent in the same format via the Conversions API
     * @see {@link https://www.facebook.com/business/help/104039186799009}
     */
    set external_id(external_id: string);
    /**
     * Gets the external ids for the user data.
     * external_id is a unique ID from the advertiser, such as loyalty membership IDs, user IDs, and external cookie IDs.
     * In the Offline Conversions API this is known as extern_id. For more information, see Offline Conversions.
     * If External ID is being sent via other channels, then it should be sent in the same format via the Conversions API
     * @see {@link https://www.facebook.com/business/help/104039186799009}
     */
    get external_ids(): string[];
    /**
     * Sets the external id for the user data.
     * @param external_ids is a unique ID from the advertiser, such as loyalty membership IDs, user IDs, and external cookie IDs.
     * In the Offline Conversions API this is known as extern_id. For more information, see Offline Conversions.
     * If External ID is being sent via other channels, then it should be sent in the same format via the Conversions API
     * @see {@link https://www.facebook.com/business/help/104039186799009}
     */
    set external_ids(external_ids: string[]);
    /**
     * Sets the external id for the user data.
     * @param {String} external_id is a unique ID from the advertiser, such as loyalty membership IDs, user IDs, and external cookie IDs.
     * In the Offline Conversions API this is known as extern_id. For more information, see Offline Conversions.
     * If External ID is being sent via other channels, then it should be sent in the same format via the Conversions API
     * @see {@link https://www.facebook.com/business/help/104039186799009}
     */
    setExternalId(external_id: string): UserData;
    /**
     * Sets the external ids for the user data.
     * @param external_ids is a unique ID from the advertiser, such as loyalty membership IDs, user IDs, and external cookie IDs.
     * In the Offline Conversions API this is known as extern_id. For more information, see Offline Conversions.
     * If External ID is being sent via other channels, then it should be sent in the same format via the Conversions API
     * @see {@link https://www.facebook.com/business/help/104039186799009}
     */
    setExternalIds(external_ids: string[]): UserData;
    /**
     * Gets the client ip address for the user data.
     * client_ip_address is the IP address of the browser corresponding to the event.
     */
    get client_ip_address(): string;
    /**
     * Sets the client ip address for the user data.
     * @param client_ip_address is the IP address of the browser corresponding to the event.
     */
    set client_ip_address(client_ip_address: string);
    /**
     * Sets the client ip address for the user data.
     * @param {String} client_ip_address is the IP address of the browser corresponding to the event.
     */
    setClientIpAddress(client_ip_address: string): UserData;
    /**
     * Gets the client user agent for the user data.
     * client_user_agent is the user agent for the browser corresponding to the event.
     */
    get client_user_agent(): string;
    /**
     * Sets the client user agent for the user data.
     * @param client_user_agent is the user agent for the browser corresponding to the event.
     */
    set client_user_agent(client_user_agent: string);
    /**
     * Sets the client user agent for the user data.
     * @param {String} client_user_agent is the user agent for the browser corresponding to the event.
     */
    setClientUserAgent(client_user_agent: string): UserData;
    /**
     * Gets the fbc for the user data.
     * fbc is the Facebook click ID value stored in the _fbc browser cookie under your domain.
     * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters#fbc},
     * You can also generate this value from a fbclid query parameter.
     */
    get fbc(): string;
    /**
     * Sets the fbc for the user data.
     * @param fbc is the Facebook click ID value stored in the _fbc browser cookie under your domain.
     * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters#fbc},
     * You can also generate this value from a fbclid query parameter.
     */
    set fbc(fbc: string);
    /**
     * Sets the fbc for the user data.
     * @param {String} fbc is the Facebook click ID value stored in the _fbc browser cookie under your domain.
     * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters#fbc},
     * You can also generate this value from a fbclid query parameter.
     */
    setFbc(fbc: string): UserData;
    /**
     * Gets the fbp for the user data.
     * fbp is Facebook browser ID value stored in the _fbp browser cookie under your domain.
     * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters#fbp},
     */
    get fbp(): string;
    /**
     * Sets the fbp for the user data.
     * @param fbp is Facebook browser ID value stored in the _fbp browser cookie under your domain.
     * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters#fbp},
     */
    set fbp(fbp: string);
    /**
     * Sets the fbp for the user data.
     * @param {String} fbp is Facebook browser ID value stored in the _fbp browser cookie under your domain.
     * See Managing fbc and fbp Parameters for how to get this value @see {@link https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters#fbp},
     */
    setFbp(fbp: string): UserData;
    /**
     * Gets the subscription id for the user data.
     * @return subscription_id is the subscription ID for the user in this transaction. This is similar to the order ID for an individual product.
     * Example: anid1234.
     */
    get subscription_id(): string;
    /**
     * Sets the subscription id for the user data.
     * @param {String} subscription_id is the subscription ID for the user in this transaction. This is similar to the order ID for an individual product.
     * Example: anid1234.
     */
    set subscription_id(subscription_id: string);
    /**
     * Sets the subscription id for the user data.
     * @param {String} subscription_id is the subscription ID for the user in this transaction. This is similar to the order ID for an individual product.
     * Example: anid1234.
     */
    setSubscriptionId(subscription_id: string): UserData;
    /**
     *
     * Gets the fb_login_id for the user data.
     */
    get fb_login_id(): string;
    /**
     * Sets the fb_login_id for the user data.
     */
    set fb_login_id(fb_login_id: string);
    /**
     * Sets the fb_login_id for the user data.
     */
    setFbLoginId(fb_login_id: string): UserData;
    /**
     *
     * Gets the lead_id for the user data. Lead ID is associated with a lead generated by Facebook's Lead Ads.
     */
    get lead_id(): string;
    /**
     * Sets the lead_id for the user data. Lead ID is associated with a lead generated by Facebook's Lead Ads.
     */
    set lead_id(lead_id: string);
    /**
     * Sets the lead_id for the user data. Lead ID is associated with a lead generated by Facebook's Lead Ads.
     */
    setLeadId(lead_id: string): UserData;
    /**
     *
     * Gets the first 5 characters of the FirstName.
     */
    get f5first(): string;
    /**
     * Sets the Gets the first 5 characters of the FirstName.
     */
    set f5first(f5first: string);
    /**
     * Sets the first 5 characters of the FirstName.
     */
    setF5First(f5first: string): UserData;
    /**
     *
     * Gets the first 5 characters of the LastName.
     */
    get f5last(): string;
    /**
     * Sets the first 5 characters of the LastName.
     */
    set f5last(f5last: string);
    /**
     * Sets the first 5 characters of the LastName.
     */
    setF5Last(f5last: string): UserData;
    /**
     *
     * Gets the first Name Initial.
     */
    get fi(): string;
    /**
     * Sets the first Name Initial.
     */
    set fi(fi: string);
    /**
     * Sets the first Name Initial.
     */
    setFi(fi: string): UserData;
    /**
     *
     * Gets the date of birth day.
     */
    get dobd(): string;
    /**
     * Sets the date of birth day.
     */
    set dobd(dobd: string);
    /**
     * Sets the date of birth day.
     */
    setDobd(dobd: string): UserData;
    /**
     *
     * Gets the date of birth month.
     */
    get dobm(): string;
    /**
     * Sets the date of birth month.
     */
    set dobm(dobm: string);
    /**
     * Sets the date of birth month.
     */
    setDobm(dobm: string): UserData;
    /**
     *
     * Gets the date of birth year.
     */
    get doby(): string;
    /**
     * Sets the date of birth year.
     */
    set doby(doby: string);
    /**
     * Sets the date of birth year.
     */
    setDoby(doby: string): UserData;
    /**
     *
     */
    get madid(): string;
    /**
     *
     */
    set madid(madid: string);
    /**
     *
     */
    setMadid(madid: string): UserData;
    /**
     *
     */
    get anon_id(): string;
    /**
     *
     */
    set anon_id(anon_id: string);
    /**
     *
     */
    setAnonId(anon_id: string): UserData;
    /**
     *
     */
    get app_user_id(): string;
    /**
     *
     */
    set app_user_id(app_user_id: string);
    /**
     *
     */
    setAppUserId(app_user_id: string): UserData;
    /**
     *
     */
    get ctwa_clid(): string;
    /**
     *
     */
    set ctwa_clid(ctwa_clid: string);
    /**
     *
     */
    setCtwaClid(ctwa_clid: string): UserData;
    /**
     *
     */
    get page_id(): string;
    /**
     *
     */
    set page_id(page_id: string);
    /**
     *
     */
    setPageId(page_id: string): UserData;
    /**
     * Returns the normalized payload for the user_data parameter.
     * @returns {Object} normalized user data payload.
     */
    normalize(): Record<string, any>;
    /**
    * Returns the deduped and normalized payload for the given array of values and the field.
    * @returns {string[]} dedupped and normalized values.
    */
    normalizeAndHashMultiValues(arr: string[], fieldName: string): string[];
    /**
     * Returns the deduped payload for the given array of values.
     * This can be applied to fields that do not require normalization or hashing.
     * @returns {string[]} deduped values.
     */
    dedupArray(arr: string[]): string[];
}
