import axios from 'axios';

export const sortList = [
    {
        field: null,
        order: null,
        label: 'Best match'
    },
    {
        field: 'created',
        order: 'desc',
        label: 'Newest to Oldest'
    },
    {
        field: 'comments',
        order: 'desc',
        label: 'Most commented'
    },
    {
        field: 'comments',
        order: 'asc',
        label: 'Less commented'
    },
];

export const labelsList = [
    'help wanted',
    'good first issue',
    'bug',
    'enhancement'
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
    issues: ({labels, language}, sort) => {
        let url = `https://api.github.com/search/issues?q=is:issue is:open${formatIssueQueryParams('label', labels)}${language != null ? formatIssueQueryParams('language', [language]) : ''}`;
        if (sort.field) {
            url += `&sort=${sort.field}&order=${sort.order}`;
        }
        return url;
    }
};

export const getIssues = (query, sort) => {
    return axios.get(
        endpoints.issues(query, sort)
    );
};