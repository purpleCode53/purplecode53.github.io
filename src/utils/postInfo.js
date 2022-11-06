const posts = [
    {
        'name': 'test-md-file',
        'title': 'lorem ipsum1',
        'date': '2022-10-15',
        'tag': ['test1', 'md1', 'md2'],
        'description': 'sample md file 1',
    },
    {
        'name': 'test-md-file-2s',
        'title': 'lorem ipsum2',
        'date': '2022-10-16',
        'tag': ['test2', 'md1', 'md2'],
        'description': 'sample md file 2',
    },
    {
        'name': '자주 사용하는 git 명령어 정리',
        'title': '자주 사용하는 git 명령어 정리',
        'date': '2022-11-01',
        'tag': ['git'],
        'description': '개인 공부 시 자주 사용하는 git 명령어 정리',
    }
]

export default JSON.stringify(posts)
