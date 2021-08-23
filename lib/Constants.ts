import { Guild, User, Channel, Message, Member } from "./models"

/**
 * Base Options for the Client Caches
 */
export interface BaseCacheOptions {
    /**
     * What is the max amount of items this cache will hold
     */
    limit?: number;
    /**
     * A number in milliseconds that you would like the cache to be cleared.
     */
    sweepInterval?: number;
}

export interface createChannelOptions {
    name: string;
}

export interface createGuildOptions {
    name: string;
}

export interface MessageData {
    content: string;
}

export interface ChannelCacheOptions extends BaseCacheOptions {
    /**
     * The filter that will remove items if they dont meet the condition
     */
    sweepFilter?: (guild: Guild) => boolean;
}

/**
 * The cache options for the Guild cache
 */
export interface GuildCacheOpiions extends BaseCacheOptions {
    /**
     * The filter that will remove items if they dont meet the condition
     */
    sweepFilter?: (guild: Guild) => boolean;
}

export interface MemberCacheOptions extends BaseCacheOptions {
    /**
     * The filter that will remove items if they dont meet the condition
     */
    sweepFilter?: (guild: Guild) => boolean;
}

export interface MessageCacheOptions extends BaseCacheOptions {
    /**
     * The filter that will remove items if they dont meet the condition
     */
    sweepFilter?: (guild: Guild) => boolean;
}

export interface UserCacheOptions extends BaseCacheOptions {
    /**
     * The filter that will remove items if they dont meet the condition
     */
    sweepFilter?: (user: User) => boolean;
}

/**
 * Options for the Client
 */
export interface ClientOptions {
    /**
     * The token for your Bot.
     */
    token: string;
    /**
     * Options for the RequestHandler
     */
    rest?: {
        /**
         * How long should the Handler wait before Aborting a request (in seconds)
         */
        requestTimeout?: number;
        /**
         * Ho wmany times should the client retry a Request
         */
        retryLimit?: number;
        /**
         * How long should the RequestHandler wait before Retry the Request (in seconds)
         */
        retryAfter?: number;
        /**
         * Additional Headers you would like passed to the client
         */
        headers?: object;
    };
    /**
     * Options for each cache 
     */
    cache?: {
        /**
         * Wether you want guilds cached or Select specific Options for the Cache
         */
        guilds?: GuildCacheOpiions | boolean;

        channels?: ChannelCacheOptions | boolean;

        members?: MemberCacheOptions | boolean;

        messages?: MessageCacheOptions | boolean;

        /**
         * Wether you want Users cached or Select specific Options for the Cache
         */
        users?: UserCacheOptions | boolean;
    }
}

/**
 * Urls for the RequestHandler (Websocket Manager Soon)
 */
export enum Urls {
    Client = "https://ferris.chat",
    Api = "https://api.ferris.chat",
    Base_Api = "/api/v"
}

/**
 * The version of FerrisChat's Api
 */
export const API_VERSION = 0

/**
 * A list of functions that return Urls that can be used to interact with the api
 */
export class Endpoints {
    //Note not all Endpoints work, some are planned others are not deployed to the api yet

    //Guilds
    static GUILD = (guildId) => `/guilds/${guildId}`
    static GUILDS = () => `/guilds`

    //Channels    
    static CHANNEL = (channelId) => `/channels/${channelId}`
    static CHANNELS = (guildId) => `/guilds/${guildId}/channels`

    //Messages
    static MESSAGE = (messageId) => `/messages/${messageId}`
    static MESSAGES = (guildId, channelId) => `/guilds/${guildId}/channels/${channelId}/messages`

    //Members
    static MEMBER = (guildId, memberId) => `/guilds/${guildId}/members/${memberId}`
    static MEMBERS = (guildId) => `/guilds/${guildId}/members` //SUBJECT TO CHANGE

    //Users
    static USER = (userId) => `/users/${userId}`
    static USER_GUILDS = (userId) => `/users/${userId}/guilds`
    static USERS = () => `/users`

    //Auth
    static AUTH_USER = (userId) => `/auth/${userId}`

    //websockets
    static WS_INFO = () => `/ws/info`

}

/**
 * Methods for the Request Handler Param "Method"
 * @type {string}
 */
export type RequestMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

/**
 * For ids
 * @type {string}
 */
export type SnowFlake = bigint;

export const FERRIS_EPOCH = 1_577_836_800_000n