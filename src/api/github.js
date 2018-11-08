import axios from 'axios';

export const labelsList = [
    'help-wanted',
    'first-timers-only',
    'good-first-issue'
];

export const languagesList = [
    "ActionScript",
    "Arduino",
    "ASP",
    "C",
    "C++",
    "C#",
    "Clojure",
    "ClojureScript",
    "CSS",
    "CoffeeScript",
    "Elm",
    "Elixir",
    "Emacs Lisp",
    "Erlang",
    "Fortran",
    "Go",
    "Groovy",
    "Haskell",
    "HTML",
    "Java",
    "JavaScript",
    "Lisp",
    "Lua",
    "Makefile",
    "Matlab",
    "Objective-C",
    "OCaml",
    "Pascal",
    "Perl",
    "PHP",
    "PowerShell",
    "Puppet",
    "Python",
    "R",
    "Ruby",
    "Rust",
    "Scala",
    "Shell",
    "SQL",
    "Swift",
    "TeX",
    "TypeScript",
    "VimL",
    "Visual Basic"
];

const formatIssueQueryParams = (filter, values) => {
    return (values.length ? ' ' : '')
        + values.map((value) => {
            return filter + ':'
                + '"' + encodeURIComponent(value) + '"'

        }).join('+')
};

const endpoints = {
    issues: ({labels, language}, sort) =>
        `https://api.github.com/search/issues?q=is:issue is:open${formatIssueQueryParams('label', labels)}${language != null ? formatIssueQueryParams('language', [language]) : ''}&sort=${sort.field}&order=${sort.order}`,
};

export const getIssues = (query, sort = {field: 'created', order: 'desc'}) => {
    return axios.get(
        endpoints.issues(query, sort)
    );
};